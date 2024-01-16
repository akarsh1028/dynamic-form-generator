import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slice/formSlice'
import editStatus from './slice/editStatus'
import formfill from './slice/formfill'

export default configureStore({
  reducer: {
    dynamicform: formReducer,
    editStatus: editStatus,
    formfill: formfill
  },
})