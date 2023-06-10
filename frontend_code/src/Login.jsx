import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
function Login(props) {
    const navigate = useNavigate();
    const {loginfunction} = useContext(GlobalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
      const handleSubmit = (e)=>{
        if(email !== "" && password !== "")
        {
            if(!/\S+@\S+\.\S+/.test(email))
            {
                toast.error(" Invalid Credentials");
            }
            else{
              const userdata = {
                email:email,
                password:password
              }
              loginfunction(userdata);
              setEmail("")
              setPassword("")
                }
        }
        else{
            toast.error("Fields can't be empty")
        }
      }
  return (
    <div style={{height:"87vh"}} className="d-flex align-items-center justify-content-center">
        <div className="column is-6 is-offset-3" style={{marginLeft:"1rem"}}>
          <div className="box">
            <h1 style={{ fontSize:"2em", borderBottom:"1px solid rgb(248, 248, 248)", marginBottom:"25px"}}>Login</h1>
            <div>
              <div className="field" style={{ marginTop:"1rem"}}>
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="field" style={{ marginTop:"1rem"}}>
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
              </div>
              <button
                className="button is-block is-info is-fullwidth"
                style={{marginTop:"1rem"}}
                onClick={()=>handleSubmit()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login