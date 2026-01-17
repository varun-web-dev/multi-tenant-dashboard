import { useAuth } from "../context/AuthContext";
import LeadsList from "../modules/leads/LeadsList";
import CallLogsList from "../modules/callLogs/CallLogsList";
import "./Dashboard.css";

const Dashboard = () => {
  const { tenant, role } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dashboard-meta">
          <span><b>Tenant:</b> {tenant}</span> |{" "}
          <span><b>Role:</b> {role}</span>
        </div>
      </div>

      <div className="dashboard-section">
        <LeadsList />
      </div>

      <div className="dashboard-section">
        <CallLogsList />
      </div>
    </div>
  );
};

export default Dashboard;
