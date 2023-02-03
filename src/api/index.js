import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './authSlice';
import campusReducer from './campus'
import crmReducer from './crm'

 

export default configureStore({
  reducer: {
     auth:authenticateReducer,  
     campus:campusReducer,
     crm:crmReducer,

  },
});