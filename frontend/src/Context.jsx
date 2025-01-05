import React, { createContext, useReducer } from 'react'

const Store = createContext();

const Context = ({children}) => {

    const initialState={
            user:'',
            token:''
        }

    const reducer=(state, action)=>{
        switch(action.type){
            case 'LOGIN':
                return{
                    ...state,
                    user:action.payload  
                }
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);
    const value={state, dispatch}

  return (
    <Store.Provider value={value}>{children}</Store.Provider>
  )
}

export default Context