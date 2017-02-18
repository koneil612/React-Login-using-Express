import React, { Component } from 'react';
import { Link } from 'react-router';
import Switch, {Case, Default} from 'react-switch-case';
import Header from './Header';
import axios from 'axios';
// import './static/css/App.css';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            email: "",
            password: "",
            page:""
        };
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.doSignup = this.doSignup.bind(this);

    }

    doLogin(email,password){
        console.log("doLogin");
        axios.post(`/login`, {
        email: email,
        password: password
        })

          .then(res => {
            if(res.data.login){
                console.log("logging in user");
                this.setState({isLoggedIn: true, page:"signin"});
            }
          });
    }

    doLogout(){
        this.setState({isLoggedIn: false, page:"greeting"});
    }

    doSignup(){
        console.log("doSignup");
        // this.setState({page:"signup"});
        <SignUp />
        }


  render() {
      let doSignup = null
      let page = this.state.page;
      console.log("page is "+page);

    return (
      <div className="App">
      <Header isLoggedIn={this.state.isLoggedIn} doLogin={this.doLogin} doLogout={this.doLogout} doSignup={this.doSignup}/>
      <br/> <hr/>


      </div>
    );
  }
}

function SignUp() {
    return(
        <div>
            <form>
             <div class="signup">
                <p><input placeholder="First Name" type="text" id="fname"/></p>
                <p><input placeholder="Last Name" type="text" id="lname"/></p>
                <p><input placeholder="Email" type="text" id="email"/> </p>
                <p><input placeholder="Password" type="password" id="password"/></p>
                <p><input placeholder="Confirm Password" type="text" id="confirm"/></p>
            <button id="send"> Sign Up</button>
            </div>
            </form>
        </div>
        )
}

//
// function SignIn(props) {
//     return(
//         <div>
//             <form>
//              <div id="signin">
//                 <input placeholder="Email" type="text" id="email"/>
//                 <input placeholder="Password" type="password" id="password"/>
//             <button id="send"> Send</button>
//             </div>
//             </form>
//         </div>
//         )
// }
