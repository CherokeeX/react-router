import { NavLink, Outlet } from "react-router-dom";
export  const MainLayout = () => {

    return (
        <div className="main-layout">
            <header className="container">
                <h1> React Router </h1>
                <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to ='about'>About</NavLink>
            <NavLink to ='help'>Help</NavLink>

             </nav>

            </header>
            <main className="container">
                <Outlet />
            </main >
        </div>
    );
}   