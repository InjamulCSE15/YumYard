import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Home from "./components/Home/Home";
function App() {  
  
  return (
   <div>
    <Home/>
    <Toaster />
   </div>    
  )
}

export default App


