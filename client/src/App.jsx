import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
// NOTICE:
// EXAMPLE IMPORT
import Login from '@pages/Login'
import SignUp from '@pages/SignUp';
// 


function App() { 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App
