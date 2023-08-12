import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import SideBar from './components/SideBar';
import Login from './pages/Login';

function App() {
  return (
      <div className='App'>
      <SkeletonTheme baseColor="#D3D3D3" highlightColor="#ECECEC">
        <SideBar/>
        <Main/>
     </SkeletonTheme>
     </div>
  );
}

export default App;
