import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slice/formSlice'

export default configureStore({
  reducer: {
    dynamicform: formReducer,
  },
})