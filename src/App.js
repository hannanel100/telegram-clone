import React, {useEffect} from 'react';
import Telegram from './components/Telegram'
import Login from './components/Login'
import {selectUser, login, logout} from './features/userSlice'

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //login
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else{
        dispatch(logout())}
    })
    return () => {
      
    }
  }, [dispatch])
  return (
    <div className="app">
      {user ? <Telegram /> : <Login />}
    </div>
  );
}

export default App;
