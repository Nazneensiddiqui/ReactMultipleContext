import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Slice from "./pages/Slice";
import Context from "./pages/Context";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Search from "./pages/Search";


const App=()=>{
 return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="slice" element={<Slice/>}/>
    <Route path="context" element={<Context/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="search" element={<Search/>}/>
    </Route>
   </Routes>
   </BrowserRouter>

    </>
  )
}
export default App;