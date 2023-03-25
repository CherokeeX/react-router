import { Link, useLoaderData } from "react-router-dom";

export const UserDetails = ()=> {
const user = useLoaderData();

    return (
        <div className="user-details">
            <h3><i className="fa-solid fa-caret-right"></i>{user.name}
            </h3>
            <ul>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.company.name} - {user.address.city}</li>
          
            </ul>
            
          <Link to="/users" >Back to Users</Link>
        </div>
        
     
    );

}   

export  const UserDetailsLoader = async({params})=>{
    const {userid} = params;
    const res =  await fetch('https://jsonplaceholder.typicode.com/users/'+ userid);
    return res.json();
}