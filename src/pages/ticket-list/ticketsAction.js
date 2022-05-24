import {
  fetchTicketLoading,
  fetchTicketsFail,
  fetchTicketsSuccess,
  searchTickets
} from './ticketsSlice';

import { getAllTickets } from '../../api/ticketApi';

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    dispatch(fetchTicketsSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketsFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};