import { configureStore } from '@reduxjs/toolkit';
import newTicketReducer from './components/add-ticket-form/addTicketSlicer';
import loginReducer from './components/login/loginSlice';
import userReducer from './pages/dashboard/userSlice';
import ticketsReducer from './pages/ticket-list/ticketsSlice';

  const store = configureStore ({
    reducer: {
      tickets: ticketsReducer,
      login: loginReducer,
      user: userReducer,
      openTicket: newTicketReducer,
    },

  });

export default store;