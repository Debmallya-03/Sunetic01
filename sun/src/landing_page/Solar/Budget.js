import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";

const Budget = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recommendation = location.state?.recommendation;

  if (!recommendation) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5">No recommendation found.</Typography>
        <Button variant="contained" onClick={() => navigate("/")}>Go Back</Button>
      </Box>
    );
  }

  // Budget Estimation Logic (Prices in INR)
  const budgetEstimates = {
    "Monocrystalline Panels": { costPerWatt: 100, installation: 40000 },  // ₹100 per watt
    "Polycrystalline Panels": { costPerWatt: 80, installation: 30000 },
    "Thin-Film Panels": { costPerWatt: 60, installation: 20000 },
    "Bifacial Panels": { costPerWatt: 120, installation: 50000 },
    "PERC Panels": { costPerWatt: 110, installation: 45000 },
  };

  const panelType = recommendation.title;
  const budgetInfo = budgetEstimates[panelType] || { costPerWatt: 90, installation: 35000 };
  const systemSize = 5000; // Example: 5kW system
  const totalCost = systemSize * budgetInfo.costPerWatt + budgetInfo.installation;

  // Convert to Indian number format (lakhs, crores)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0056b3" }}>
        Budget Estimation
      </Typography>

      <Paper elevation={3} sx={{ mt: 3, p: 3, borderRadius: "10px", textAlign: "left" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {panelType} Estimated Budget
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Cost per Watt:</b> {formatCurrency(budgetInfo.costPerWatt)}
        </Typography>
        <Typography>
          <b>System Size:</b> {systemSize / 1000} kW
        </Typography>
        <Typography>
          <b>Installation Cost:</b> {formatCurrency(budgetInfo.installation)}
        </Typography>
        <Typography sx={{ mt: 2, fontSize: "1.2rem", fontWeight: "bold", color: "#d32f2f" }}>
          Total Estimated Cost: {formatCurrency(totalCost)}
        </Typography>
      </Paper>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Box>
  );
};

export default Budget;
