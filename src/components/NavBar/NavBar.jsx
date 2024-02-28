import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    
  }

  return (
    <nav>
      {user ? 
        <>
          <Link to="/starters">My Starters</Link>
          <Link to="/bakes">My Bakes</Link>
          <Link to="/">Home</Link>
          <Link to="/" onClick={handleLogOut}>Log Out</Link>
          <span>Welcome, {user.name}</span>
          </>
        : 
        <>
          <Link to="/login">Log In/Sign Up</Link>
        </>
      }
    </nav>
  );
}