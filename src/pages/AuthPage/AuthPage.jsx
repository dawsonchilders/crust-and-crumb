import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import {useState} from 'react'

export default function AuthPage({ setUser }) {

  const [showLogin, setShowLogin] = useState(true);

  const toggleForms = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={toggleForms}>
        {showLogin ? 'Sign Up' : 'Login'}
      </button>
      {showLogin ? (
      <SignUpForm setUser={setUser} />
      ) : (
      <LoginForm setUser={setUser}/>
      )}
    </main>
  );
}
