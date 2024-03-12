import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface navState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}

const initialState: navState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<string | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<string | null>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: { nav: navState }) => state.nav.origin;
export const selectDestination = (state: { nav: navState }) =>
  state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: navState }) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
