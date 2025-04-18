import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, MenuItem, Grid } from "@mui/material";
import { WiDaySunny, WiHumidity, WiThermometer } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const SolarAdvisor = () => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const navigate = useNavigate();

  const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const GEOAPIFY_API_KEY = process.env.REACT_APP_GEOAPIFY_API_KEY;

  const handleLocationSearch = async (query) => {
    setLocation(query);
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${GEOAPIFY_API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch locations");
      const data = await response.json();
      setSuggestions(data.features);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleSelectLocation = (place) => {
    setLocation(place.properties.formatted);
    setSelectedLocation({ lat: place.geometry.coordinates[1], lon: place.geometry.coordinates[0] });
    setSuggestions([]);
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();

      const weatherInfo = {
        temp: data.main.temp,
        humidity: data.main.humidity,
        sunlight: 10, // Simulating sunlight hours for now
        condition: data.weather[0].main,
      };

      setWeatherData(weatherInfo);
      generateRecommendation(weatherInfo);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const analyzeLocation = () => {
    if (selectedLocation) {
      fetchWeatherData(selectedLocation.lat, selectedLocation.lon);
    } else {
      alert("Please select a valid location from the suggestions.");
    }
  };

  const generateRecommendation = () => {
    const recommendations = [
      {
        title: "Monocrystalline Panels",
        rating: "10/10",
        advantages: ["High efficiency", "Space-efficient", "Long lifespan (25+ years)"],
        considerations: ["Higher cost", "Performance drops in very high temperatures"],
      },
      {
        title: "Polycrystalline Panels",
        rating: "8.5/10",
        advantages: ["Affordable", "Good efficiency"],
        considerations: ["Less efficient than monocrystalline", "Larger size needed"],
      },
      {
        title: "Thin-Film Panels",
        rating: "6/10",
        advantages: ["Flexible", "Lightweight", "Works well in low light"],
        considerations: ["Lower efficiency", "Shorter lifespan"],
      },
      {
        title: "Bifacial Panels",
        rating: "9/10",
        advantages: ["Can capture sunlight from both sides", "High energy yield"],
        considerations: ["Expensive", "Requires proper setup"],
      },
      {
        title: "PERC Panels",
        rating: "9.5/10",
        advantages: ["Improved efficiency", "Better low-light performance"],
        considerations: ["More expensive than standard panels"],
      },
    ];

    // Select a random recommendation
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    setRecommendation(recommendations[randomIndex]);
  };

  return (
    <Box sx={{ textAlign: "center", p: 3, position: "relative" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0056b3" }}>
        Solar Panel Advisor
      </Typography>
      <Typography sx={{ color: "#666", mt: 1 }}>
        Find the perfect solar panel solution for your location based on weather conditions and sunlight exposure.
      </Typography>

      <Paper elevation={3} sx={{ mt: 3, p: 3, borderRadius: "10px", textAlign: "left" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0056b3", mb: 1 }}>
          📍 Location
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => handleLocationSearch(e.target.value)}
          sx={{ bgcolor: "white", borderRadius: "5px" }}
        />

        {suggestions.length > 0 && (
          <Paper sx={{ position: "absolute", zIndex: 10, width: "100%", mt: 1 }}>
            {suggestions.map((place, index) => (
              <MenuItem key={index} onClick={() => handleSelectLocation(place)}>
                {place.properties.formatted}
              </MenuItem>
            ))}
          </Paper>
        )}

        <Button variant="contained" color="primary" sx={{ mt: 2, width: "100%" }} onClick={analyzeLocation}>
          Analyze
        </Button>
      </Paper>

      {weatherData && (
        <>
          <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: "10px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0056b3" }}>
              ☁️ Weather Conditions
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
              {location}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1 }}>
              {weatherData.temp}°C <span style={{ fontSize: "18px" }}>{weatherData.condition}</span>
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={4}>
                <Paper sx={{ p: 2, textAlign: "center", borderRadius: "10px" }}>
                  <WiDaySunny size={40} color="#f7b500" />
                  <Typography>Daily Sunlight</Typography>
                  <Typography>{weatherData.sunlight} hrs</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{ p: 2, textAlign: "center", borderRadius: "10px" }}>
                  <WiThermometer size={40} color="#ff4500" />
                  <Typography>Temperature</Typography>
                  <Typography>{weatherData.temp}°C</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper sx={{ p: 2, textAlign: "center", borderRadius: "10px" }}>
                  <WiHumidity size={40} color="#00aaff" />
                  <Typography>Humidity</Typography>
                  <Typography>{weatherData.humidity}%</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={3} sx={{ mt: 3, p: 3, borderRadius: "10px" }}>
            <Typography variant="h5">{recommendation.title}</Typography>
            <Typography>⭐ {recommendation.rating} Suitability</Typography>
            <Typography>✅ {recommendation.advantages.join(", ")}</Typography>
            <Typography>⚠️ {recommendation.considerations.join(", ")}</Typography>
            
            {/* Budget Button */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/Budget", { state: { recommendation } })}
            >
              Budget
            </Button>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default SolarAdvisor;
