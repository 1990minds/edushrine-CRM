import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
// import { message } from 'antd';
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'
import { CgLayoutGrid } from 'react-icons/cg'


const token =  localStorage.getItem('token') ?
localStorage.getItem('token') : null

const user =  localStorage.getItem('userinfo') ?
 JSON.parse(localStorage.getItem('userinfo'))  : null

 const branches = localStorage.getItem('userBranch')?
 JSON.parse(localStorage.getItem('userBranch')) : null

// console.log(user)

export const initialState = {

   loading:false,
   hasErrors:false,
   user:user,
   isAuthenticate:  user? true : false,
   branches:branches,
   token:token,
   current:[],
   filter:[],
   currentUser:null


}

export const authenticateSlice = createSlice({


    name:"auth",
    initialState,
    reducers:{

      getlogin:state =>{

        state.loading = true;
      },

      getAuthenticate: (state, {payload}) =>{
        console.log(payload)

        state.loading = false;
         state.isAuthenticate = true 
         state.user = payload.marketingManager
         state.branches = payload.marketingManager.branch
         state.token = payload.token
        //  console.log(user)
      },






      getFilter: (state, {payload}) =>{
console.log(payload)

        state.loading = false;
        state.current = payload
  
      },
    
      isAuthenticateError: state =>{

        state.hasErrors = true;
        state.loading = false;
        state.isAuthenticate = false


      },
      getCurrentUser: (state, {payload}) =>{
        console.log({k:payload});

          state.loading = false
          state.currentUser = payload
          
      },


      getUserProfile: (state, {payload})=>{
        console.log(payload)
        state.loading = false;
        state.user = payload.marketingManager
        state.branches = payload.marketingManager.branch
        state.isAuthenticate = true;

        console.log(user)

      } ,
      getFilter: (state, {payload}) =>{

        state.loading = false;
        state.filter = payload
  
      },
    }


})


export const {getlogin, getFilter, getUserProfile, getAuthenticate, isAuthenticateError }  = authenticateSlice.actions

export const authenticateSelector = state => state.auth
export default authenticateSlice.reducer




export const logOut = () => async dispatch =>{
    // const key = 'logOut';

    try {
               
        localStorage.removeItem('token');
        localStorage.removeItem('userinfo');
        localStorage.removeItem('userBranch');
        window.location.href='/';

    } catch (error) {

        dispatch(isAuthenticateError())

    }

}


export const fetchlogin = (logindata) => async dispatch =>{
  console.log(logindata)

    const key = 'login';
    dispatch(getlogin())
    // message.loading({ content: 'Loading...', key })

    try {
            
        const {data} = await axios.post(keyUri.BACKEND_URI + '/marketingManagerAuth', logindata, config)
        // console.log({data})
        // console.log(data.marketingManager.branch)

        dispatch(getAuthenticate(data))
        localStorage.setItem('token', data.token)
        localStorage.setItem('userinfo', JSON.stringify(data.marketingManager))
        localStorage.setItem('userBranch', JSON.stringify(data.marketingManager.branch))
        // data &&  message.success({ content: data.msg, key, duration: 2 });
        // if(data.role === 'student')
        // window.location.href = '/student'
        // else if(data.role === 'parent')
        // window.location.href = '/parent'
        // window.location.href = '/mainPage'

    } catch (error) {
      
      toast.error(' Invalid User!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      // error && message.error({ content: error.response.data.msg, key, duration: 1 });
       dispatch(isAuthenticateError())
    }

}


export const fetchUserRegister = (Regdata) => async dispatch => {

console.log(Regdata)

  const key = 'login';
  dispatch(getlogin())
  // message.loading({ content: 'Loading...', key })

    try {
        
     
      const { data } = await axios.post(keyUri.BACKEND_URI +'/register', Regdata, config)
       
// console.log(data)
        dispatch(getAuthenticate(data))

        localStorage.setItem('token', data.token )
        localStorage.setItem('userinfo', JSON.stringify(data.curr_user) )
        // data &&  message.success({ content: data.msg, key, duration: 2 });

    } catch (error) {
      // error && message.error({ content: error.response.data.msg, key, duration: 1 });
       dispatch(isAuthenticateError())
    }

}

export const fetchAdminProfile = (token) => async dispatch =>{
  console.log('getching profile')

  const loginConfig  = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  dispatch(getlogin())
 


  try {

    const {data} = await axios.get(keyUri.BACKEND_URI + '/marketingManagerProfile',  loginConfig)
    console.log({data})

    dispatch(getUserProfile(data))

  } catch (error) {
          // error && message.error('Authentication Failure');
          dispatch(logOut())


  }
}


export const fethFilter = (value, filter) => async dispatch =>{
let a = []
if(!value ){
 return dispatch(getFilter(a))

}

  try {
      const {data} = await axios.get(keyUri.BACKEND_URI + `/${value}?search=${filter}`, config)
      dispatch(getFilter(data))


  } catch (error) {

      dispatch(isAuthenticateError())
  }

}


export const checkAuth = () => async dispatch =>{

  const token = localStorage.getItem('token')
  const loginConfig  = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
 
  try {
    const {data} = await axios.get(keyUri.BACKEND_URI + '/profile',  loginConfig)

    dispatch(getUserProfile(data))

  } catch (error) {

    console.log(error)
    //       error && message.error('Authentication Failure');
    //       error && localStorage.removeItem('token');
    //       window.location.href = '/';
          // dispatch(logOut())

  }
}
