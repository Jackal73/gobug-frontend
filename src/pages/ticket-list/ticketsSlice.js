import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: '',
  searchTicketList: []
};

const ticketListSlice = createSlice ({
  name: 'ticketList',
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketsSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketsFail: (state, { payload }) => {
      state.tickets = false;
      state.error = payload;
    },
    searchTickets: (state, {payload}) => {
      state.searchTicketList = state.tickets.filter(row => {
        if (!payload) return row

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    }
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketsSuccess,
  fetchTicketsFail,
  searchTickets,
} = actions;

export default reducer;