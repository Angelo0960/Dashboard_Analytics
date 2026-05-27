import jwt from 'jsonwebtoken';

export const registerUser = async (userData) => {
    const res = await fetch(`http://localhost:3000/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');
    return data;
};

export const loginUser = async (email, password) => {
    const res = await fetch(`http://localhost:3000/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data;
};

export const verifyToken = async (token) => {
    try {
        const decoded = jwt.verify(token, 'bsit3b');
        return decoded; // contains { id, role, iat, exp }
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
};