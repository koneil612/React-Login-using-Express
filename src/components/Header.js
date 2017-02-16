import React, { Component } from 'react';
import { Link } from 'react-router';

function SignUpButton(props) {
    return (
        <button onClick={props.onClick}>Sign Up</button>
    );
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

function UserGreeting(props) {
    return <h1> Hello Again </h1>;
}

function GuestGreeting(props) {
    return <h1> Welcome! Please Login or Sign Up to continue </h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


class Header extends React.Component {
    constructor() {
        super();
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
    }

    handleLoginClick() {
        this.props.doLogin();
    }

    handleLogoutClick() {
        this.props.doLogout();
    }

    handleSignUpClick() {
        this.props.doSignup();
    }


  render() {
      const isLoggedIn = this.props.isLoggedIn;
      let button = null;
      let signupbutton = null;
      let loginbutton = null;
      if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
          loginbutton =
          <LoginButton onClick={this.handleLoginClick} />
          signupbutton =
          <SignUpButton onClick={this.handleSignUpClick} />
      }

    return (
      <div className="Header">
        <Greeting isLoggedIn={this.props.isLoggedIn} />
        {button}
        {loginbutton} {signupbutton}
      </div>

  );
  }
}






export default Header;
