import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import MatrixRain from "../../components/matrixRain/matrixRain"; 

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Get the intended route

  useEffect(() => {
    // Set a timer to show the loading screen for at least 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000ms = 5 seconds

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <MatrixRain />
      </div>
    );
  }

  // After loading, navigate to the intended route
  return <Navigate to={location.pathname} />;
};

export default LoadingScreen;
