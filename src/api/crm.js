import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
// import {message} from 'antd'
import { logDOM } from '@testing-library/react';
import { keyUri } from '../key';
import { useToast } from 'react-toastify';
import { MdVerticalAlignBottom } from 'react-icons/md';

export const initialState = {

    loading: false,
    hasErrors: false,
    crm:[],
    currentCrm:null,
}

export const crmSlice = createSlice({
    name:"crm",
    initialState,
    reducers:{

        getCrm: state =>{

            state.loading = true
        },

        getCrmSuccess: (state, {payload}) =>{
            state.loading = false
            state.crm = payload
            
        },

        getCurrentCrm: (state, {payload}) =>{
          console.log({k:payload});

            state.loading = false
            state.currentCrm = payload
            
        },
        getCrmFailure: (state, {payload}) =>{

            state.loading = false
            state.crm = payload
            
        },

    }
})

export const {getCrm, getCrmSuccess, getCurrentCrm, getCrmFailure } = crmSlice.actions
      
export const crmSelector = state => state.crm
export default crmSlice.reducer


const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };



export const  fetchAllCrm = () => async dispatch =>{
      const key = "crm"
      dispatch(getCrm())
      
    try {

        const {data} = await axios.get(keyUri.BACKEND_URI +'/crm');
        console.log(data)
        const branches = JSON.parse(localStorage.getItem('userBranch'))
        console.log(branches)
        const newData=data?.filter((item)=>{
          return  item.status=="New"
          }) 
        console.log({newData})
        dispatch(getCrmSuccess(newData))

    } catch ({response}) {

        dispatch(getCrmFailure())
        // response.data && message.error({ content: response.data.msg, key, duration: 2 });

    }
    
}

export const  fetchOneCrm = (id) => async dispatch =>{

    dispatch(getCrm())
    
  try {

      const {data} = await axios.get(keyUri.BACKEND_URI +`/crm/${id}`);
      dispatch(getCurrentCrm(data))

  } catch ({response}) {

      dispatch(getCrmFailure())
    //   response.data && message.error({ content: response.data.msg, key, duration: 2 });

  }
  
}


export const  createCrm = (values) => async dispatch =>{
  console.log(values);
    const key = "crm"
    dispatch(getCrm())
    // message.loading({ content: 'loading...', key })
    
  try {

      const {data} = await axios.post(keyUri.BACKEND_URI +'/crm', values, config);
      setTimeout(() => {

        // message.success({ content: data.msg, key, duration: 2 });
      }, 500) 
        dispatch(fetchAllCrm())

  } catch ({response}) {
       dispatch(getCrmFailure())
  }
  
}


export const  deleteCrm = (id) => async dispatch =>{
    // console.log(id)
    const key = "crm"
    dispatch(getCrm())
    // message.loading({ content: 'loading...', key })
    
  try {

      const {data} = await axios.delete(keyUri.BACKEND_URI +`/crm/${id}`);
    //   data && message.success({ content: data.msg, key, duration: 2 });
      dispatch(fetchAllCrm())

  } catch ({response}) {

      dispatch(getCrmFailure())
    //   response.data && message.error({ content: response.data.msg, key, duration: 2 });

  }
  
}


export const  updateCrm = (id, values) => async dispatch =>{
    const key = "crm"
    dispatch(getCrm())
    const toast=useToast
    // message.loading({ content: 'loading...', key })
    
  try {

      const {data} = await axios.put(keyUri.BACKEND_URI +`/crm/${id}`, values, config);
    //   data && message.success({ content: data.msg, key, duration: 2 });
      // window.location.reload()

      dispatch(fetchAllCrm())

  } catch ({response}) {

      dispatch(getCrmFailure())
    //   response.data && message.error({ content: response.data.msg, key, duration: 2 });

  }
  
}