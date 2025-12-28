import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import Layout from './components/layout/Layout';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={<PrivateRoute><Layout /></PrivateRoute>}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/profile" element={<PrivateRoute><Layout><Profile /></Layout></PrivateRoute>} />
                <Route path="/editor/:id" element={<PrivateRoute><Editor /></PrivateRoute>} />
                {/* Add more routes here */}

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
