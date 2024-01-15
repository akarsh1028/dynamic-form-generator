import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'dynamicForm',
  initialState: {
    value: {
      heading: "Form",
      items: 1,
      inputs: [
        {
          label: "Name",
          placeholder: "Enter Name",
          type: "text",
          required: false,
          min: 5,
          max: 10,
        },
      ]
    },
  },
  reducers: {
    addElement: (state, action) => {
      let obj = action.payload;
      state.value.inputs.push(obj);
    },
    deleteElement: (state, action) => {
      state.value.inputs.splice(action.payload,1);
    },
    changeHeading: (state) => {
      console.log(state.value.heading)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addElement, deleteElement, changeHeading } = formSlice.actions

export default formSlice.reducer