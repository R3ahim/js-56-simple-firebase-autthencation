
import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase.init'
import { useState } from 'react';
import Practise from './componentes/Practise';



const auth = getAuth(app);
function App() {
  const [user,setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
const handleGogglesignIn =()=>{
     signInWithPopup(auth,googleProvider)
     .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
     })
     .catch(eror=>
       console.log(eror)
     )

}
const handleGithubSign =()=>{
  signInWithPopup(auth,gitProvider)
  .then(result=>{
    const user = result.user;
    setUser(user)
    console.log(user);
  })
  .catch(error=>{
    console.log(error);
  })
}
const handleSignOut =()=>{
  signOut(auth)
  .then(()=>{
     setUser({})
  })
  .catch(error=>{
    setUser({})
  })

}
  
  return (
    <div className="App">
      {/* {{condition ? true: fasle }} */}
  {user.email ? <button onClick={handleSignOut}>Sign out</button>
  :<div>
     <button onClick={handleGogglesignIn}>google sign in </button>
     <button onClick={handleGithubSign}>Github sign In</button>
     </div>}
 
     <h2>{user.displayName}</h2>
     <h3>{user.email}</h3>
     <img src={user.photoURL}alt="" />

     <Practise></Practise>
    </div>
  );
}

export default App;
