import React from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import MainPanel from '../hooks/MainPanel';
const Home = () => {
    const {onLogout} = React.useContext(AuthContext);
    const token = React.useContext(AuthContext).getToken();
  return (
    <>
    <MainPanel>
    <div>Home Page And Token is {token}</div>
     </MainPanel>
    </>
  )
}

export default Home