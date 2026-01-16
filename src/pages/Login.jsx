import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [tenant, setTenant] = useState("orgA");
  const [role, setRole] = useState("Admin");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <div>
        <label>Tenant: </label>
        <select value={tenant} onChange={(e) => setTenant(e.target.value)}>
          <option value="orgA">Organization A</option>
          <option value="orgB">Organization B</option>
        </select>
      </div>

      <br />

      <div>
        <label>Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
      </div>

      <br />

      <button onClick={() => login(tenant, role)}>Login</button>
    </div>
  );
};

export default Login;
