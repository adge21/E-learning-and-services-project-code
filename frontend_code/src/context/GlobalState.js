import React, { createContext, useReducer } from "react";
import AppProvider from "./AppProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";

const initialState = {
  loggedin:localStorage.getItem("isloggedin")? true:false,
  firstname:localStorage.getItem("firstname"),
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppProvider, initialState);
  const navigate = useNavigate();

 async function addusertodb(dataofuser){
  const toastId = toast.loading("Uploading...")
  await axios.post('https://shiksha-two.vercel.app/register',dataofuser,{withCredentials:"include"}).then(res=>{
            toast.dismiss(toastId);
            toast.success(`${res.data.message}`);
            navigate("/login");
            }).catch(error=>{
              toast.dismiss(toastId);
              console.log(error);
              if(error.code === "ERR_BAD_REQUEST")
                {
                  toast.error(`${error.response.data.error}`);
                }
              if(error.code === "ERR_NETWORK")
                {
                  toast.error("Something went wrong");
                }
})
  }
  async function loginfunction(emailpass){
    const toastId = toast.loading("Uploading...")
    await axios.post('https://shiksha-two.vercel.app/signin',emailpass,{withCredentials:"include"}).then(res=>{
      console.log(res)
            toast.dismiss(toastId);
            dispatch({
              type:"NAME_FOUND",
              payload:res.data.data.name
            })
            localStorage.setItem("firstname",res.data.data.name);
            toast.success(`${res.data.data.message}`);
            changeit(true);
            navigate("/");
            }).catch(error=>{
              toast.dismiss(toastId);
              console.log(error);
              if(error.code === "ERR_BAD_REQUEST")
                {
                  toast.error(`${error.response.data.error}`);
                }
              if(error.code === "ERR_NETWORK")
                {
                  toast.error("Something went wrong");
                }
})
    }
  const changeit = (here)=>{
    if(here)
    {
      localStorage.setItem("isloggedin", 1)
    }
    else{
      toast.success("You are successfully logged out");
      localStorage.clear();
      navigate("/");
    }
    dispatch({
      type:"LOGIN",
      payload:here,
    })
  }
 

return (
  <GlobalContext.Provider
    value={{
      loggedin:state.loggedin,
      changeit,
      addusertodb,
      loginfunction,
      firstname:state.firstname,
    }}
  >
    {children}
  </GlobalContext.Provider>
);
};
