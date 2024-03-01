import { Link, useLocation } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const location = useLocation();
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    
  }

  return (
    <nav>
      {user ? 
        <>
          {location.pathname !== '/starters' && <Link to="/starters">My Starters</Link>}
          {location.pathname !== '/bakes' && <Link to="/bakes">My Bakes</Link>}
          {location.pathname !== '/' && <Link to="/">Home</Link>}
          <Link to="/" onClick={handleLogOut}>Log Out</Link>
          <span>Welcome, {user.name}</span>
          </>
        : 
        <>
          {location.pathname !== '/login' && <Link to="/login">Log In/Sign Up</Link>}
          {location.pathname !== '/' && <Link to="/">Home</Link>}
        </>
      }
    </nav>
  );
}