import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'

const initialState = {
    all_campus:[],
    current_campus:null,
    loading:false,
    hasError:false,
}

export const campusSlice = createSlice({

  name: 'campus',
  initialState,

  reducers: {
    getcampus: state => {
      state.loading = true;
    },

    getAll_campus_success: (state, {payload})  =>{
      // console.log(payload);
        state.loading = false
        state.all_campus = payload
    },

    get_campus_Failure: (state) => {
      state.loading = false
      state.hasError = true
    },

    getCurrentSuccess: (state, {payload}) =>{
      state.loading = false
      state.current_campus = payload
  
  },

  },
})


export const { getcampus ,getAll_campus_success,getCurrentSuccess, get_campus_Failure } = campusSlice.actions;

export const campusSelector = state => state.campus;



export const fetchAllcampus = (id) => async dispatch => {
  dispatch(getcampus())
  try {
   const {data} = await axios.get(keyUri.BACKEND_URI +`/campus`)
  //  console.log({data});
   dispatch(getAll_campus_success(data));

  } catch (error) {
 dispatch(get_campus_Failure())
  }
 };



 export const fetchOneCampus = (id) => async dispatch => {

  dispatch(getcampus())
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/campus/${id}`, config)

  //  console.log({data});

   dispatch(getCurrentSuccess(data));
  } catch (error) {

 dispatch(get_campus_Failure())
  }
 };



export default campusSlice.reducer;