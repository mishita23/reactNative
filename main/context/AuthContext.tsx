import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  profileImage?: string | null;

};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    setUser(prev =>
      prev ? { ...prev, ...data } : prev
    );
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
