import {  Outlet } from "react-router-dom";

export const UsersLayout = ()=>{
    return(
    <div className="users-layout">
        <h1>USER LIST
        </h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iusto sequi totam nam suscipit aliquid doloremque dignissimos magnam optio in!</p>



<Outlet />
        
    </div>);
}   