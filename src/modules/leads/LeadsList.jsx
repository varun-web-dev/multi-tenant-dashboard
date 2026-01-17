import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { leadsData } from "../../data/leads";
import "./LeadsList.css";

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

    console.log("Updated leads array:", updated);
    setLocalLeads(updated);
  };



  return (
    <div className="leads-container">
  <h3 className="leads-title">Leads</h3>

  <div className="filter-bar">
    <label>Status Filter</label>
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

  {filteredLeads.length === 0 && (
    <p className="empty-state">No leads found.</p>
  )}

  <div className="leads-list">
    {filteredLeads.map((lead) => (
      <div className="lead-card" key={lead.id}>
        <div className="lead-row">
          <span>Name</span>
          <strong>{lead.name}</strong>
        </div>

        <div className="lead-row">
          <span>Phone</span>
          <strong>{lead.phone}</strong>
        </div>

        <div className={`status ${lead.status.toLowerCase()}`}>
          {lead.status}
        </div>

        {role === "Admin" && (
          <button
            className="update-btn"
            onClick={() => handleStatusChange(lead.id)}
          >
            Update Status
          </button>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default LeadsList;
