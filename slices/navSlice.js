import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin:null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  //object inside parenthesis
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;
//when push data into the data layer then we need to pull it back from the data layer

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination=(state)=> state.nav.destination;
export const selectTravelTimeInformation=(state)=>state.nav.travelTimeInformation;

export default navSlice.reducer;