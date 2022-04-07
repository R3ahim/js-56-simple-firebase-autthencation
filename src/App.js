
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebase.init'


const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
const handleGogglesignIn =()=>{
     signInWithPopup(auth,provider)
     .then(result =>{
      const user = result.user;
      console.log(user);
     })
     .catch(eror=>
       console.log(eror)
     )
}
  
  return (
    <div className="App">
     <button onClick={handleGogglesignIn}>google sign in </button>
     
    </div>
  );
}

export default App;
