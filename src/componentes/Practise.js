import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase.init';

const auth = getAuth(app)
const Practise = () => {
    const [data,setData]= useState({})
    const propvider =new GoogleAuthProvider();
    
    const handlenewGoogle =()=>{
        signInWithPopup(auth,propvider)
        .then(result =>{
            const user =  result.user;
            setData(user)
            console.log(user);
        })
        .catch(errro=>{
            console.log(errro);
        })
    }
    return (
        <div>
            <h1>this is from practis</h1>
            <button onClick={handlenewGoogle}>Gogle newProvider</button>
            <h1>{data.displayName}</h1>
        </div>
    );
};

export default Practise;