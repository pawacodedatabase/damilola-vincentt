import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: { fullname?: string; username?: string; email?: string; gender?: string } | null;
  setUser: React.Dispatch<React.SetStateAction<AuthContextType['user']>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
