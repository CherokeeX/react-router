import { useLoaderData } from "react-router-dom";

export const UserDetails = ()=> {
const user = useLoaderData();

    return (
        <>
        <div>
            {user.name}

        </div>

         <div>
         {user.username}
         
     </div>
     </>
    );

}   

export  const UserDetailsLoader = async({params})=>{
    const {userid} = params;
    const res =  await fetch('https://jsonplaceholder.typicode.com/users/'+ userid);
    return res.json();
}