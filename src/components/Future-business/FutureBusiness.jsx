import DashboardStats from "./DashboardStats";
import OpportunityDashboard from "./OpportunityDashboard";
import OpportunitiesSection from "./OpportunitiesSection";
import FilterButtonSection from "./FilterButtonSection";
import { useState } from "react";

const FutureBusiness = () => {
  const [filters, setFilters] = useState({
    timePeriod: "Last 30 days",
    businessSegment: "All Segments",
    opportunityType: "All Types",
    priorityLevel: "All Levels",
  });

  return (
    <>
      <DashboardStats filters={filters} />
      <OpportunityDashboard filters={filters} />
      <OpportunitiesSection filters={filters} />
      <FilterButtonSection filters={filters} setFilters={setFilters} />
    </>
  );
};

export default FutureBusiness;