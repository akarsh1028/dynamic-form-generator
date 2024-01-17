import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slice/formSlice'
import editStatus from './slice/editStatus'
import viewformSlice from './slice/viewformSlice'

export default configureStore({
  reducer: {
    dynamicform: formReducer,
    editStatus: editStatus,
    viewforms: viewformSlice
  },
})