import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { leadsData } from "../../data/leads";

const LeadsList = () => {
  const { tenant, role } = useAuth();  
  console.log("Current tenant:", tenant, "Role:", role);

  // tenant leads data
  const leads = leadsData[tenant] || []; 

  const [statusFilter, setStatusFilter] = useState("all"); 
  const [localLeads, setLocalLeads] = useState(leads);  

  
  useEffect(() => {
    setLocalLeads(leads);
    console.log("LocalLeads set to:", leads);
  }, [tenant, leads]);

  
  const filteredLeads =
    statusFilter === "all"
      ? localLeads
      : localLeads.filter(
          (lead) => lead.status.toLowerCase() === statusFilter.toLowerCase()
        );
        console.log("Filtered leads based on statusFilter:", statusFilter, filteredLeads)

  
  const handleStatusChange = (id) => {
    console.log(`On clicked Edit Status on lead ID: ${id}`);
    const updated = localLeads.map((lead) =>
      lead.id === id ? { ...lead, status: "Contacted" } : lead
    );
    setLocalLeads(updated);
  };
  console.log("localLeads after status update:", updated);
  

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Leads</h3>

      <div style={{ marginBottom: "10px" }}>
        <label>Status Filter: </label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      {/* List of leads */}
      {filteredLeads.map((lead) => (
        <div
          key={lead.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "8px",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          <div><b>Name:</b> {lead.name}</div>
          <div><b>Phone:</b> {lead.phone}</div>
          <div><b>Status:</b> {lead.status}</div>

          
          {role === "Admin" && (
            <button
              style={{ marginTop: "5px" }}
              onClick={() => handleStatusChange(lead.id)}
            >
              Update Status
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeadsList;
