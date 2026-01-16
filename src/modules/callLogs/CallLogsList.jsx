import { useAuth } from "../../context/AuthContext";
import { callLogsData } from "../../data/callLogs";

const CallLogsList = () => {
  const { tenant } = useAuth(); 

  console.log("Current tenant:", tenant);
  
  //tenant call logs data
  const calls = callLogsData[tenant] || []; 
  console.log("Loaded call logs:", calls);

  return (
    <div>
      <h3>Call Logs</h3>

      {calls.length === 0 && <p>No calls available.</p>}

      {calls.map((call) => (
        <div
          key={call.id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "6px",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          <div><b>Lead Name:</b> {call.leadName}</div>
          <div><b>Date/Time:</b> {call.time}</div>
          <div><b>Duration:</b> {call.duration}</div>
          <div><b>Outcome:</b> {call.outcome}</div>
        </div>
      ))}
    </div>
  );
};

export default CallLogsList;
