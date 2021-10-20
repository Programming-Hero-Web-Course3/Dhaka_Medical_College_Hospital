import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import "./Register.css"
 


const Register = () => {
  const {signInUsingGoogle} = useAuth()
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user,setUser] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [isLogIn,setIsLogin] = useState(false); 


  // google sign in process
  const handleGoogleSignIn =() =>{

    signInWithPopup(auth, googleProvider)
     
    .then((result) => {
      
       setUser(result.user)
        console.log(result);
        console.log(result.user.displayName);
  })
  .catch((error) => {
    console.log(error.message)
  });
  
  }

  // nameChange process
  const handleNameChange =(e)=>{
    setName(e.target.value);
    console.log(name)
  }
  // emailChange process
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
    console.log(email)
  }
  // passwordChange process
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
    console.log(password)
  }
  // toggling process
  const toggleLogin =(e) =>{
    setIsLogin(e.target.checked);
    console.log(isLogIn)
  }

  const handleRegistration =(e)=>{
    //preventing default working systems  
    e.preventDefault()
      console.log(email,password)

      //password strength section
      if(password.length<4){
        setError('Password should be at least 6 characters')
      }

       // login process
       const processLogin = (email,password,name) =>{
          signInWithEmailAndPassword(auth,email,password,name)
          .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            setUserName();
          })
          .catch(error =>{
            setError(error.message);
          })
       }

      // registering process
      const registerNewUser =(email,password,name)=>{
        createUserWithEmailAndPassword(auth,email,password,name)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError();
          setUserName();
          
        })
        .catch(error =>{
          setError(error.message)
        })
      }

      // checking process if it is registered or not.
      if(isLogIn){
        processLogin(email,password,name);
      }
      else{
        registerNewUser(email,password,name);
      }

      const setUserName = () =>{
        updateProfile(auth.currentUser,{
          displayName:name
        })
        .then(result=>{
          console.log(result);
        })
      }


     

  }
  return (
    <div>
      <h1>Keep In touch With Us. </h1>
      <br /> <br />
      {/* Register or Log in with any Email */}
  <form  onSubmit={handleRegistration} className="w-50 mx-auto">
      <h3 className="text-primary">Please {isLogIn ? 'Log in': 'Register'}</h3>
    
         {/* name section */}
      {
        (!isLogIn) && <div className="form-group">
        <label htmlFor="exampleInputName">User Name</label>
        <input onBlur={handleNameChange} type="name" className="form-control" id="exampleInputName1" placeholder="Your Name"/>
      </div>
      }

        {/* email section */}
      <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

        {/* password section */}
      <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>

        {/* warning section */}
        <div className="row mb-3">
            <p className="text-warning">{error}</p>
        </div>

        {/* islogin section */}
        <div  onChange={toggleLogin}  className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />

            <label className="form-check-label" htmlFor="exampleCheck1">Already Registered ?</label>
    
        </div>
        <br /> 
        {/* submission and upadting section */}
        <button type="submit" className="btn btn-primary">{isLogIn ? 'Log in' : 'Register'}</button>

  </form>

  <br /><br />
  {/* register or log in with Gmail */}
        <h1>Want to Log in With Google?</h1>
        <br />
      <button className="btn btn-info" onClick={handleGoogleSignIn}>Google sign in</button>

      <br /> <br />
      {/* <h2>Name : {user?.displayName}{name}</h2>
      <h3>Email : {user.email}{email}</h3>
      <h3>Password : {user.password}{password}</h3> */}
      
    </div>
  );
};

export default Register;