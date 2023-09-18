/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

import { aviaService } from '../services/avia-service';

const initialState = {
  filters: [
    // локальный стейт, который про глобальный ничего не знает
    { id: 0, checked: true, value: 'Все' },
    { id: 1, checked: true, value: 'Без пересадок', transfers: 0 },
    { id: 2, checked: true, value: '1 пересадка', transfers: 1 },
    { id: 3, checked: true, value: '2 пересадки', transfers: 2 },
    { id: 4, checked: true, value: '3 пересадки', transfers: 3 },
  ],
  buttons: [
    { id: 0, active: false, value: 'самый дешевый' },
    { id: 1, active: false, value: 'самый быстрый' },
  ],
  tickets: [],
  stop: false,
  status: null,
  error: null,
  count: 5,
  sortByPrice: false,
  sortBySpeed: false,
};

export const fetchTickets = createAsyncThunk('aviasales/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const tickets = await aviaService();
    return tickets;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const aviaSlice = createSlice({
  name: 'aviasales',
  initialState,
  reducers: {
    toggleCheckbox(state, action) {
      const checkboxId = action.payload.id;

      if (checkboxId === 0) {
        const allChecked = state.filters.every((filter) => filter.checked);
        state.filters.forEach((el) => {
          el.checked = !allChecked;
        });
      } else {
        state.filters[checkboxId].checked = !state.filters[checkboxId].checked;
      }

      const allCheckedBesidesFirst = state.filters.slice(1).every((filter) => filter.checked);
      state.filters[0].checked = allCheckedBesidesFirst;
    },
    applySort(state, action) {
      const buttonId = action.payload.id;
      state.buttons.forEach((button, index) => {
        const isActive = index === buttonId;
        button.active = isActive;
      });
      if (buttonId === 0) {
        state.sortByPrice = true;
        state.sortBySpeed = false;
        state.tickets.sort((a, b) => a.price - b.price);
      } else if (buttonId === 1) {
        state.sortByPrice = false;
        state.sortBySpeed = true;
        state.tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
      }
    },
    showTickets: (state) => {
      state.count += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = true;
        const tickets = action.payload.tickets.map((ticket) => ({
          id: uniqid(),
          ...ticket,
        }));
        state.tickets.unshift(...tickets);

        if (!action.payload.stop) {
          state.stop = !state.stop;
        } else {
          state.status = false;
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.error = action.payload;
        state.stop = !state.stop;
      });
  },
});

export const { toggleCheckbox, applySort, showTickets } = aviaSlice.actions;
export default aviaSlice.reducer;
