import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Main';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<AuthPage type='signIn' />} />
        <Route path="/signUp" element={<AuthPage type='signUp' />} />

        {/* <Route element={<ProtectedRoute isAllowed={!!currentUser} />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      {/* </Route> */}

        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
};

export default App;
