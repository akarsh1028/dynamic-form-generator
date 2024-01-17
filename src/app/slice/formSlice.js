import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'dynamicForm',
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
    addElement: (state, action) => {
      let obj = action.payload;
      state.value.inputs.push(obj);
    },
    deleteElement: (state, action) => {
      state.value.inputs.splice(action.payload,1);
    },
    changeHeading: (state, actions) => {
      state.value.heading = actions.payload
    },
    valueChange: (state, actions) => { 
      state.value.inputs[actions.payload.index][actions.payload.type] = actions.payload.value
    },
    optionChange: (state, actions) => { 
      state.value.inputs[actions.payload.index].option[actions.payload.option].label = actions.payload.value
    },
    addOption: (state, actions) => {
      state.value.inputs[actions.payload].option.push(`Option`)
    },
    deleteOption: (state, action) => {
      state.value.inputs[action.payload.index].option.splice(action.payload.option, 1);
    },
    setDefault: (state) => {
      state.value = {
        heading: "Form Title",
        inputs: [
          {
            label: "Name",
            placeholder: "Enter Name",
            type: "text",
            required: true,
          },
        ]
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const { addElement, deleteElement, changeHeading, valueChange, addOption, deleteOption, optionChange, setDefault } = formSlice.actions

export default formSlice.reducer