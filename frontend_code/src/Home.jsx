import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect } from 'react'
import learning1 from "./assets/learning1.svg"
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='d-flex w-100 justify-content-around' style={{marginTop:"4rem"}}>
        <div style={{marginRight:"13rem"}}>
            <h1 style={{fontSize:"3.6rem",marginTop:"8rem", fontFamily:'Fira Sans',lineHeight:"5rem"}}>
            India's practical<br/>learning platform
            </h1>
            <Button varient="primary" size="lg" style={{marginTop:"2rem"}} onClick={()=>navigate("/courses")}>Start Learning</Button>
        </div>
        <div><img src={learning1} alt="learning" className='w-100'/></div>
        </div>
    </div>
  )
}

export default Home