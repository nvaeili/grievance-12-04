import React, {useState, useEffect} from "react";
import { firebaseApp} from "../../../firebase";
import Login from './Login';
import LandingPage from '../../pages/HomePage/Home';
import './MainPage.css';
import Dashboard from "../AdminDashboard/Dashboard";

function MainPage() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  //functiom for Login
  const handleLogin = () => {
    clearErrors();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
        }
      });

  };

  //function for sign up 
  const handleSignup = () => {
    clearErrors();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then((userCredential)=>{
          // send verification mail.
        userCredential.user.sendEmailVerification();
        alert("Email sent. Click the link in your email to verify your account.");
      })
      .catch(alert)
      .catch(err => {
        switch(err.code){
          
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
        }
      });

  };

  //function for logout
  const handleLogout = () => {
    firebaseApp.auth().signOut();
  };

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[])

  return (
    <div className="App">
      {user ? (
        <Dashboard handleLogout={handleLogout}/>
      ) : 
        (
        <Login
        //the ff. are the states      
          email={email} 
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
        ) }
    </div>
  );
}

export default MainPage;