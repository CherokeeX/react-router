import { Link, useRouteError } from "react-router-dom";

export const UsersError = ()=> {

    const error = useRouteError();

return (
    
     <div>
        <h1>Page can not  Found</h1>
        <p>{error.data}</p>
        <Link to='/'>Back to Main Page</Link>

    </div>);
}