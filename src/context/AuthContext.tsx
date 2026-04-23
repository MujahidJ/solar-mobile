import React, { createContext, useContext, useEffect, useState } from "react";
import {
  saveAuthData,
  getToken,
  getUserType,
  clearAuthData,
} from "../utils/storage";

type AuthContextType = {
  token: string | null;
  userType: string | null;
  loading: boolean;
  login: (newToken: string, type: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (newToken: string, type: string) => {
    await saveAuthData(newToken, type);
    setToken(newToken);
    setUserType(type);
  };

  const logout = async () => {
    await clearAuthData();
    setToken(null);
    setUserType(null);
  };

  const restoreSession = async () => {
    const savedToken = await getToken();
    const savedUserType = await getUserType();

    if (savedToken) {
      setToken(savedToken);
      setUserType(savedUserType);
    }

    setLoading(false);
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        userType,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};