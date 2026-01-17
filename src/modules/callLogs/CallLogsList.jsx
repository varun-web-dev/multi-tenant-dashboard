import { useAuth } from "../../context/AuthContext";
import { callLogsData } from "../../data/callLogs";
import "./CallLogsList.css";

const CallLogsList = () => {
  const { tenant } = useAuth();

  console.log("Current tenant:", tenant);

  const calls = callLogsData[tenant] || [];
  console.log("Loaded call logs:", calls);

  return (
    <div className="calllogs-container">
      <h3 className="calllogs-title">Call Logs</h3>

      {calls.length === 0 && (
        <p className="empty-state">No calls available.</p>
      )}

      {calls.map((call) => (
        <div key={call.id} className="call-card">
          <div className="call-row">
            <span>Lead</span>
            <strong>{call.leadName}</strong>
          </div>

          <div className="call-row">
            <span>Date/Time</span>
            <strong>{call.time}</strong>
          </div>

          <div className="call-row">
            <span>Duration</span>
            <strong>{call.duration}</strong>
          </div>

          <div className="call-outcome">
            <b>Outcome:</b> {call.outcome}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallLogsList;
