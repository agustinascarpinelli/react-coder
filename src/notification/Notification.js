import './Notification.css'
import React,{useState, createContext, useContext} from 'react'


const Notification=({message,severity})=>{
    if(message === '') {
        return null
    }
    const config= true?
    {
        className:`${severity==='success'?'success':'error'} message`
    
    }:{}
   
    return (
        <div {...config} >
            {message}
        </div>
    )
 }

 const NotificationContext =createContext()



export const NotificationProvider=({children})=>{
    
    const [message,setMessage]=useState('')
    const[severity,setSeverity]=useState('')
    const setNotification=(sev,msg)=>{
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 5000);
    }
    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}
export const useNotification = () => {
    return useContext(NotificationContext)
}

