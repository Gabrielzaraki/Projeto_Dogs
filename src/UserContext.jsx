import React from 'react'
import { GET_USER, TOKEN_POST } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null) 

  async function userLogin(username, password) {
    const {url, options} = TOKEN_POST({username, password})
    const tokenres = await fetch(url, options);
    const {token} = await tokenres.json();
    window.localStorage.setItem('token', token);
    getUser(token)
  }

  async function getUser(token) {
    const {url, options} = GET_USER(token)
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  return (
    <UserContext.Provider value={{userLogin, data}}>
      {children}
    </UserContext.Provider>
  )
}


