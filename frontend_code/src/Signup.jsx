import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
function Signup(props) {
    const navigate = useNavigate();
    const {addusertodb} = useContext(GlobalContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [confirm,setConfirm] = useState("");
      const handleSignin = (e)=>{
        if(email !== "" && password !== "" && confirm !== "" && firstname !== "" && lastname !== "")
        {
            if(!/\S+@\S+\.\S+/.test(email) || confirm !== password)
            {
                toast.error(" Invalid Credentials");
            }
            else{
              const userdata = {
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                confirm:confirm,
              }
              console.log(userdata);
              addusertodb(userdata);
              setFirstname("")
              setLastname("")
              setEmail("")
              setPassword("")
              setConfirm("")
            }
        }
        else{
            toast.error("Fields can't be empty")
        }
      }
  return (
    <div style={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-center">
        <div className="column is-6 is-offset-3" style={{marginLeft:"1rem"}}>
          <div className="box">
            <h1 style={{ fontSize:"2em", borderBottom:"1px solid rgb(248, 248, 248)", marginBottom:"25px"}}>Sign up</h1>
            <div>
            <div className="field d-flex justify-content-between" style={{ marginTop:"1rem"}}>
              <div style={{width:"48%"}}>
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="firstname"
                    name="firstname"
                    onChange={(e)=>setFirstname(e.target.value)}
                    value={firstname}
                    required
                  />
                </div>
                </div>
                <div style={{width:"48%"}}>
                  <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="lastname"
                    name="lastname"
                    onChange={(e)=>setLastname(e.target.value)}
                    value={lastname}
                    required
                  />
                </div>
                </div>
              </div>
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
              <div className="field" style={{ marginTop:"1rem"}}>
                <label className="label">Re-enter Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={(e)=>setConfirm(e.target.value)}
                    value={confirm}
                    required
                  />
                </div>
              </div>
              <button
                className="button is-block is-info is-fullwidth"
                style={{marginTop:"1rem"}}
                onClick={()=>handleSignin()}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup