import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "editslice",
  initialState: {
    value: {
      status: false,
      index: 0
    }
  },
  reducers: {
    toggleState: (state, actions) => {
      state.value.status = !state.value.status;
      state.value.index = actions.payload
    },
    updateIndex: (state, actions) => {
      state.value.index = actions.payload
    },
    reset: (state) => {
      state.value = {
        status: false,
        index: 0
      }
    }
  },
})

export const { toggleState, updateIndex, reset } = editSlice.actions

export default editSlice.reducer