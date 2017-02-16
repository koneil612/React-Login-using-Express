import React, { Component } from 'react';
import { Link } from 'react-router';
import Switch, {Case, Default} from 'react-switch-case';
import Header from './Header';
// import './App.css';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: "",
            pswd: "",
            page:""
        };
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.doSignup = this.doSignup.bind(this);


    }

    doLogin(){
        this.setState({isLoggedIn: true, page:"signin"});
    }

    doLogout(){
        this.setState({isLoggedIn: false, page:"greeting"});
    }

    doSignup(){
        console.log('want to sign up');
        this.setState({page: "signup"});
        }


  render() {
      let doSignup = null
      let page = this.state.page;
      console.log("page is "+page);

    return (
      <div className="App">
      <Header isLoggedIn={this.state.isLoggedIn} doLogin={this.doLogin} doLogout={this.doLogout} doSignup={this.doSignup}/>
      <br/> <hr/>
      <Switch condition={page}>
      <Case value='signup'><SignUp />
      </Case>
      <Case value='signin'><SignIn />
      </Case>
      </Switch>
      </div>
    );
  }
}

function SignUp(props) {
    return(
        <div>
            <form onSubmit="something will happen">
             <div id="signup">
                <p><input placeholder="First Name" type="text" id="fname"/></p>
                <p><input placeholder="Last Name" type="text" id="lname"/></p>
                <p><input placeholder="Email" type="text" id="email"/> </p>
                <p><input placeholder="Password" type="password" id="password"/></p>
                <p><input placeholder="Confirm Password" type="text" id="confirm"/></p>
            <button id="send"> Send</button>
            </div>
            </form>
        </div>
        )
}

function SignIn(props) {
    return(
        <div>
            <form onSubmit="something will happen">
             <div id="signin">
                <input placeholder="Email" type="text" id="email"/>
                <input placeholder="Password" type="password" id="password"/>
                <input placeholder="Confirm Password" type="text" id="confirm"/>
            <button id="send"> Send</button>
            </div>
            </form>
        </div>
        )
}
