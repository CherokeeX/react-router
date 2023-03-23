import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = ()=>{
    return(
    <div className="help-layout">
        <h1>Help
        </h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iusto sequi totam nam suscipit aliquid doloremque dignissimos magnam optio in!</p>
<nav>
    <NavLink to ='contacts' >Contacts</NavLink>
    <NavLink to ='askme' >FAQ</NavLink>
</nav>


<Outlet />
        
    </div>);
}