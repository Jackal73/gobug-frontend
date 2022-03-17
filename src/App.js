import React from 'react';
// import { Entry } from './pages/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
// import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import './App.css';
import { TicketLists } from './pages/ticket-list/TicketLists.page';




function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
