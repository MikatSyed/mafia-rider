import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
 import firebaseConfig from './firebaseConfic';
import {UserContext} from '../App';
import { useHistory, useLocation } from 'react-router-dom';




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginForm = () => { 
const[loggedInUser,setLoggedInUser] = useContext(UserContext);
const history = useHistory();
const location = useLocation();
const {from} = location.state || {from:{pathname:"/"}};
const[user,setUser] = useState({
  isSignedIn : false,
  name:'',
  email:'',
  password: '',
  photo:''
 
});


  const handleGoogleSignIn = ()=>{
   var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  
    var credential = result.credential;
    var token = credential.accessToken;
    const{displayName,email} = result.user;
    const signInUser ={ name: displayName,email: email}
    // const user = result.user;

    setLoggedInUser(signInUser);
    // history.replace(from)
    history.push('/destination')

    // console.log(signInUser);
    //  setUser(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email);
  });
          
   }

  
     const handleGithubSignIn=()=>{
      var ghProvider = new firebase.auth.GithubAuthProvider();

      firebase
      .auth()
      .signInWithPopup(ghProvider)
      .then((result) => {
       
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user);
        console.log('gh user',user);
       
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
       
      });

     }     
  return (
          <div className="App">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Sign In Using Google</button><br/>
            <button className="btn btn-danger" onClick={handleGithubSignIn}>Sign In Using Github</button><br/>
          
           
            <img src={user.photoURL}/>
 
    </div>
  );
}

export default LoginForm;