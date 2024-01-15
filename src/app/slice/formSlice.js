import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'dynamicForm',
  initialState: {
    value: {
      heading: "Form",
      inputs: [
        {
          label: "Checkbox",
          placeholder: "Enter Name",
          type: "checkbox",
          required: false,
          option: ["Option", "Option", "Option"],
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
    },
    valueChange: (state, actions) => { 
      state.value.inputs[actions.payload.index][actions.payload.type] = actions.payload.value
    },
    optionChange: (state, actions) => { 
      state.value.inputs[actions.payload.index].option[actions.payload.option] = actions.payload.value
    },
    addOption: (state, actions) => {
      state.value.inputs[actions.payload].option.push(`Option`)
    },
    deleteOption: (state, action) => {
      state.value.inputs[action.payload.index].option.splice(action.payload.option, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addElement, deleteElement, changeHeading, valueChange, addOption, deleteOption, optionChange } = formSlice.actions

export default formSlice.reducer