import { createSlice } from '@reduxjs/toolkit'

export const viewformSlice = createSlice({
  name: 'viewFormSlice',
  initialState: {
    value: {},
  },
  reducers: {
    setDynamicForm: (state, actions) => {
      state.value = actions.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDynamicForm } = viewformSlice.actions

export default viewformSlice.reducer