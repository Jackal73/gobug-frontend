import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Entry } from './pages/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import './App.css';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>

          <PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute exact path="/add-ticket">
						<AddTicket />
					</PrivateRoute>
					<PrivateRoute exact path="/ticket/:tId">
						<Ticket />
					</PrivateRoute>
					<PrivateRoute exact path="/tickets">
						<TicketLists />
					</PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
