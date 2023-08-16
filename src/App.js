import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import NavRoutes from './NavRoutes';

function App() {
  return (
    <div className="bg-pale-white h-screen">
      <Header />
      
      <div className="h-1 w-full flex flex-rpw">
      <SideNav />
      
      <NavRoutes />
      </div>

    </div>
  );
}

export default App;
