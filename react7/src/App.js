import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './componentes/NavBar';
import { HomeScreen } from './HomeScreen';
import { AboutScree } from './AboutScree';
import { ContacScreen } from './ContacScreen';
import { UsuarioProvider } from './context/UsuarioProvider';
import { LogincScreen } from './LogincScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <UsuarioProvider>
     <NavBar/>

<Routes>
<Route path='/' element={<HomeScreen/>}></Route>
<Route path='/about' element={<AboutScree/>}></Route>
<Route path='/contact' element={<ContacScreen/>}></Route>
<Route path='/*' element={<Navigate to="/"/>}></Route>
<Route path='/login' element={<LogincScreen/>}></Route>
</Routes>
     </UsuarioProvider>
    </div>
  )
}

export default App;
