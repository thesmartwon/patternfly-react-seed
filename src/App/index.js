import React, { Component } from 'react';
import { Alert, Button } from '@patternfly/react-core';
import MyComponent from 'react-test-lib'
import './app.css';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <Alert
              variant="success"
              title="Setup Complete"
              action={
                <Button onClick={this.dismissNotification} variant="secondary">
                  Dismiss
                </Button>
              }
            >
              You have successfully launched your patternfly starter project.
              <MyComponent />
            </Alert>
          </div>
        )}
      </div>
    );
  }
}
