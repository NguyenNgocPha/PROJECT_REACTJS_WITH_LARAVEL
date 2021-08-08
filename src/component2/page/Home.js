import './Home.css';
import React, { Component } from 'react';
import Dashboard from '../context/Dashboard';
import Sidebar from '../partials/Sidebar';
import ListPartner from '../context/Partner/ListPartner';
import Login from '../auth/Login';
import Footer from '../../Component/Footer';
import ContentChild from '../../Component/Content/ContentChild';
import Header from '../../Component/Header';
import ListSharing from '../context/sharing/ListSharing';
import ListLeader from '../context/leader/ListLeader';
import ListDiscover from '../context/discover/ListDiscover';
import ListCampaign from '../context/campaign/ListCampaign';
import ListDonater from '../context/donater/ListDonater';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditPartner from '../context/Partner/EditPartner';

export default class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <ContentChild />
            <Footer />
          </Route>
          <Route path="/admin">
            <Login />
          </Route>
          <div className="App" id="outer-container">
            <Route exact path="/indexAdmin">
              <Sidebar
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
              />
            </Route>
            <Route exact path="/dashboard" >
              <Dashboard
              />
            </Route>
            <Route exact path="/partner" >
              <ListPartner />
            </Route>
            <Route exact path="/partner/:id/edit" component={EditPartner}>
            </Route>
            <Route exact path="/sharing" >
              <ListSharing />
            </Route>
            <Route exact path="/leader" >
              <ListLeader />
            </Route>
            <Route exact path="/discover" >
              <ListDiscover />
            </Route>
            <Route exact path="/campaign" >
              <ListCampaign />
            </Route>
            <Route exact path="/donater" >
              <ListDonater />
            </Route>
            <div id="page-wrap">
              <div
                class="modal bs-example-modal-sm"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4>Are you sure ?</h4>
                    </div>
                    <div class="modal-body">
                      <p>
                        <i class="fa fa-question-circle"></i> Are you sure you
                        want to log out?
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-primary btn-block"
                        onClick={this.onLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Switch>
      </Router>
    );
  }
}
