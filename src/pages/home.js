import { NavLink } from "react-router-dom"


export const Home = ()=>{
    return (
  
      <div className='Home'>

        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to ='/about'>About</NavLink>
        </nav>
        <h1>DENEME ROUTER SAYFASI</h1>
        <p>TEST</p>
      </div>
    )
  }