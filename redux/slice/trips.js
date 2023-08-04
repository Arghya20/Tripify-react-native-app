import {createSlice} from '@reduxjs/toolkit';

const initialTripsState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: 'Trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (state, action) => {
      const tripId = action.payload.tripId;
      state.trips = state.trips.map(trip => {
        if (trip.id === tripId) {
          trip.expenses = [...trip.expenses, action.payload.expenses];
        }
        return trip;
      });
    },
  },
});

export const {addTrip, addExpense} = tripSlice.actions;
export default tripSlice.reducer;
