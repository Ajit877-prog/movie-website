import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect to your backend API
    // For now, we'll just simulate a successful login
    if (email && password) {
      try {
        // Mock successful login - use a username instead of email
        // Extract username from email (everything before @)
        const username = email.split('@')[0];
        localStorage.setItem('user', JSON.stringify({ email, username }));
        // Force a page reload to ensure the app recognizes the new login state
        window.location.href = '/';
      } catch (err) {
        console.error('Login error:', err);
        setError('An error occurred during login');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex items-center border-b border-gray-700 py-2 mb-4">
              <FaUser className="text-gray-400 mr-2" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border-b border-gray-700 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;