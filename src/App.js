import React, {Component, Suspense, lazy} from 'react';
import {connect} from 'react-redux'
import { Switch, Route} from 'react-router-dom';
import { AppBar } from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Register = lazy(() => import('./pages/RegisterPage'));
const Login = lazy(() => import('./pages/LoginPage'));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
      return (
      <>
        <AppBar isAuthenticated={this.props.isAuthenticated}/>

        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/contacts" redirectTo="/users/login" component={PhonebookPage} />
            <PublicRoute path="/users/signup" redirectTo="/contacts" component={Register} />
            <PublicRoute path="/users/login" redirectTo="/contacts" component={Login} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
