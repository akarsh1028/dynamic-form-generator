import { createSlice } from '@reduxjs/toolkit'

export const formfill = createSlice({
  name: 'formfill',
  initialState: {
    value: {
      heading: "Form Title",
      inputs: [
        {
          label: "Name",
          placeholder: "Enter Name",
          type: "text",
          required: true,
        },
      ]
    },
  },
  reducers: {
    setDynamicForm: (state, actions) => {
      state.value = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDynamicForm } = formfill.actions

export default formfill.reducer