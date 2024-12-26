import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
       <Link to="home">Home</Link>            ||
       <Link to="slice">Slice</Link>          ||
       <Link to="context">Context</Link>      ||
       <Link to="insert">Insert</Link>        ||
       <Link to="display">Display</Link>      ||
       <Link to="Update">Update</Link>        ||
       <Link to="search">Search</Link>        ||
       <hr color="red"/>

<Outlet/>
 <hr color="red"/>
       www.mycompany@gmail.com @copy


        </>
    )
}
export default Layout;