import { createSlice } from "@reduxjs/toolkit";
const initCounterState = {
  value: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export default counterSlice;