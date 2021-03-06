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
    return <h1> Hello {fname} </h1>;
}

function GuestGreeting(props) {
    return <h1> Welcome! <br/> Please Login or Sign Up to continue </h1>;
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
        this.state={
            isLoggedIn: false,
            email: "",
            password: ""
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleLoginClick(event) {
        this.props.doLogin(this.state.email,this.state.password);
        event.preventDefault();
    }

    handleLogoutClick() {
        this.props.doLogout();
    }

    handleSignUpClick() {
        this.props.doSignup();
    }

    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
      this.setState({password: event.target.value});
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
        <form>
         <div className="signin">
            <input placeholder="Email" type="text" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
            <input placeholder="Password" type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        {loginbutton} {signupbutton}
        </form>
      </div>

  );
  }
}






export default Header;
