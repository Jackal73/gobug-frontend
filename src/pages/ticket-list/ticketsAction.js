import { getAllTickets, getSingleTicket } from '../../api/ticketApi';
import {
  fetchSingleTicketLoading,
  fetchSingleTicketsFail,
  fetchSingleTicketsSuccess, fetchTicketLoading,
  fetchTicketsFail,
  fetchTicketsSuccess,
  searchTickets
} from './ticketsSlice';


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

// Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    dispatch(fetchSingleTicketsSuccess(result.data.result[0]));
  } catch (error) {
    dispatch(fetchSingleTicketsFail(error.message));
  }
};

