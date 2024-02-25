import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    
  }

  return (
    <nav>
      {user ? (
        <>
          <Link to="/starters">My Starters</Link>
          &nbsp; | &nbsp;
          <Link to="/bakes">My Bakes</Link>
          &nbsp; | &nbsp;
          <Link to="/" onClick={handleLogOut}>Log Out</Link>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
        </>
      ) : (
        <>
          <Link to="/login">Log In/Sign Up</Link>
          &nbsp; | &nbsp;
          <Link to="/">Home</Link>
        </>
      )}
    </nav>
  );
}