import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slice/formSlice'
import editStatus from './slice/editStatus'

export default configureStore({
  reducer: {
    dynamicform: formReducer,
    editStatus: editStatus,
  },
})