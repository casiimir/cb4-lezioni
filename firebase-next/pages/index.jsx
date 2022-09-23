import { app, db, auth, accessWithGoogle } from '../services/firebase';
import { useState } from 'react'
import styles from '../styles/Home.module.css';

export default function Home() {

  if (typeof window !== "undefined") {
    console.log("Siamo a livello del client");
    localStorage.setItem('prova', JSON.stringify({ a: 1 }))
  } else {
    console.log("Siamo a livello del server")
  }

  const [userData, setUserData] = useState({});

  const onHandleClick = () => {
    console.log('App => ', app);
    console.log('DB => ', db);
    console.log('Auth => ', auth);
    accessWithGoogle();
    setUserData(auth.currentUser)
  }

  const getUserNameData = () => console.log('User Data => ', auth.currentUser);
  console.log(userData.photoURL)
  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <button onClick={onHandleClick}>click</button>
      <button onClick={getUserNameData}>Get username</button>
      {
        userData && (
          <>
            <h1>{userData.displayName || ''}</h1>
            <p>{userData.email || ''}</p>
            <img src={userData.photoURL} alt="profile img" />
          </>
        )
      }
    </div>
  )
}
