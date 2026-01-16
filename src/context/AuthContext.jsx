import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [tenant, setTenant] = useState(null);
  const [role, setRole] = useState(null);

  const login = (selectedTenant, selectedRole) => {
    setTenant(selectedTenant);
    setRole(selectedRole);
  };

  return (
    <AuthContext.Provider value={{ tenant, role, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
