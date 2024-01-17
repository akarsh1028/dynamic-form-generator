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
    setFormValues: (state, actions) => {
      state.value.inputs[actions.payload.index].value = actions.payload.value;
    },
    setCheckbox: (state, actions) => {
      state.value.inputs[actions.payload.index].option = actions.payload.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDynamicForm, setFormValues } = viewformSlice.actions

export default viewformSlice.reducer