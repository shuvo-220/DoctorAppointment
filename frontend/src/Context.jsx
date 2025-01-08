import React, { createContext, useReducer } from 'react'

export const Store = createContext();

const Context = ({children}) => {

    const initialState={
            user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
            token:localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): ''
        }

    const reducer=(state, action)=>{
        switch(action.type){
            case 'LOGIN':
                return{
                    ...state,
                    user:action.payload  
                }
            case 'LOGOUT':
                return{
                    ...state,
                    user:null
                }
            default:
                return state
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);
    const value={state, dispatch}

  return (
    <Store.Provider value={value}>{children}</Store.Provider>
  )
}

export default Context