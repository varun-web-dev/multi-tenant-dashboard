import { useAuth } from "../context/AuthContext";
import LeadsList from "../modules/leads/LeadsList";
import CallLogsList from "../modules/callLogs/CallLogsList";

const Dashboard = () => {
  const { tenant, role } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <p><b>Tenant:</b> {tenant}</p>
      <p><b>Role:</b> {role}</p>

      <hr />

      <LeadsList />
      <CallLogsList />
    </div>
  );
};

export default Dashboard;
