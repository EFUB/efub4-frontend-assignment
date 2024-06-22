import React, { createContext, useContext, useState, useEffect } from 'react';
import { postLogin } from './api/user';

const Authorization = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // 초기화 후 localStorage에서 사용자 정보 가져오기
    useEffect(() => {
        const token = localStorage.getItem('efubtoken');
        if (token) {
            setCurrentUser({ token }); // 여기서는 token만 저장하거나 필요한 사용자 정보를 가져올 수 있습니다.
        }
    }, []);

    const login = async (username, password) => {
        try {
            const res = await postLogin(username, password);
            const token = res.data.accessToken;
            localStorage.setItem('efubtoken', token);
            setCurrentUser({ token, username }); // 필요한 사용자 정보 추가
        } catch (error) {
            console.log('로그인 실패', error);
            setCurrentUser(null);
        }
    };

    const logout = () => {
        localStorage.removeItem('efubtoken');
        setCurrentUser(null);
    };

    return (
        <Authorization.Provider value={{ currentUser, login, logout }}>
            {children}
        </Authorization.Provider>
    );
};

export const useAuth = () => useContext(Authorization);
