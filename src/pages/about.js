import { NavLink } from "react-router-dom";
export const About = ()=>{
    return (
  
      <div className='About'>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to ='/about'>About</NavLink>
        </nav>

        <h1>DENEME ABOUT SAYFASI</h1>
        <p>Lorem .....</p>
      </div>
    )
  }