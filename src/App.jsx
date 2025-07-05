import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import Trading from './pages/Main';
import Pricing from './pages/Pricing';
import Mining from './pages/Mining';
import CopyTrade from './pages/CopyTrade';
import Holding from './pages/Holding';
import Account from './pages/Account';

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
        <Route path="/trading" element={<Trading />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/mine" element={<Mining />} />
        <Route path="/copy" element={<CopyTrade />} />
        <Route path="/hold" element={<Holding />} />
        <Route path="/account" element={<Account />} />


      {/* </Route> */}

        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
};

export default App;
