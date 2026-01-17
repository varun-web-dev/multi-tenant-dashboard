import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [tenant, setTenant] = useState("orgA");
  const [role, setRole] = useState("Admin");

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <div className="form-group">
          <label>Tenant</label>
          <select value={tenant} onChange={(e) => setTenant(e.target.value)}>
            <option value="orgA">Organization A</option>
            <option value="orgB">Organization B</option>
          </select>
        </div>

        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Agent">Agent</option>
          </select>
        </div>

        <button
          className="login-btn"
          onClick={() => login(tenant, role)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
