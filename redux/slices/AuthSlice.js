import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { auth } from '../../Firebase'
import { database } from '../../Firebase'
import {storage} from '../../Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {setDoc,doc,getDoc} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const initialState = {
    loading: false,
    error: '',
    user: null
}

export const loginUser = createAsyncThunk('auth/loginUser', async (obj, {fulfillWithValue,rejectWithValue})=>{
    try {
        const response = await signInWithEmailAndPassword(auth, obj.email, obj.password)
        const docRef = doc(database, "users", response.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return fulfillWithValue(docSnap.data())
        }
    } catch (error) {
        console.log(error.message)
    }
})

export const registerUser = createAsyncThunk('auth/registerUser', (obj, {fulfillWithValue, rejectWithValue}) => {
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(res => {
    let uid = res.user.uid
    let user = {
        uid,
        email: res.user.email,
        username: '',
        followers: 0,
        following: 0,
        posts: []
    }
    setDoc(doc(database, 'users', uid),user)
    .then(res => {
        getDoc(doc(database, 'users', uid))
        .then(res => {
            return fulfillWithValue(res.data())
        })
        .catch(error=>{
            return rejectWithValue(error.message)
        })
    })
    .catch(error => {
        console.log(error)
    })
  })
  .catch(error => {
    return rejectWithValue(error.message)
  })
})

export const postImage = createAsyncThunk('auth/postImage', async (obj, {fulfillWithValue, rejectWithValue}) => {
    try {
        const image = obj.imageUrl
        const filename = image.substring(image.lastIndexOf('/')+1)

        const response = await fetch(obj.imageUrl)
        const blob = response.blob()

        const storageRef = ref(storage, `posts/${filename}`);

        const uploadTask = uploadBytesResumable(storageRef, blob);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            });
        }
        );
    } catch (error) {
        console.log(error)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true,
            state.error = ''
            state.user = null
        })
        builder.addCase(loginUser.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.user = action.payload
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
            state.user = null
        })

        //register
        // builder.addCase(registerUser.pending, (state)=>{
        //     state.loading = true
        // })
        // builder.addCase(registerUser.fulfilled, (state,action) => {
        //     state.loading = false
        //     state.error = ''
        //     state.user = action.payload
        //     state.token = ''
        // })
        // builder.addCase(registerUser.rejected,(state, action) => {
        //     state.error = action.payload
        //     state.loading = false
        //     state.user = null
        //     state.token = ''
        // })
    }
})

export default authSlice.reducer