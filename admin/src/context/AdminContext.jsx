import { createContext } from "react"
import { useState } from "react"

export const AdminContext = createContext()

const backendUrl= import.meta.env.VITE_BACKEND_URL

const AdminContextProvider = (props)=>{

   const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken'): '')



   const value = {
     aToken, setAToken,
     backendUrl,
   }

   return(
    <AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>
   )
}

export default AdminContextProvider