import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'

export default function AuthPage({ setUser }) {

  const [showLogin, setShowLogin] = useState(true);

  const toggleForms = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main>
      <div className="auth-container">
        <button onClick={toggleForms}>
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
    </main>
  );
}
