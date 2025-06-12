import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const api = `https://api.weatherapi.com/v1/current.json?key=2750e53e646342299fb70815251206&q=${
    inputValue || "london"
  }`;

  const getWeatherData = async () => {
    try {
      const res = await axios.get(api);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-yellow-100 to-amber-200">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center">
        <div className="mb-6 text-4xl font-extrabold text-indigo-600 drop-shadow-lg tracking-wide">
          Weather App
        </div>
        <div className="w-full flex mb-6 gap-2">
          <input
            value={inputValue}
            onChange={handleChange}
            className="flex-1 p-3 rounded-xl bg-white border border-indigo-200 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
            type="text"
            placeholder="Enter city name..."
          />
          <button
            onClick={getWeatherData}
            className="px-5 py-2 rounded-xl bg-indigo-500 text-white font-bold shadow hover:bg-indigo-600 transition cursor-pointer"
          >
            Search
          </button>
        </div>

        <div className="w-full space-y-3">
          <div className="bg-indigo-100 text-indigo-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Location:</span>{" "}
            {weatherData.location?.name || "--"}
          </div>
          <div className="bg-blue-100 text-blue-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Temp in C:</span>{" "}
            {weatherData.current?.temp_c ?? "--"}°C
          </div>
          <div className="bg-blue-100 text-blue-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Temp in F:</span>{" "}
            {weatherData.current?.temp_f ?? "--"}°F
          </div>

          <div className="flex justify-center items-center bg-amber-100 py-3 rounded-xl shadow">
            {weatherData.current?.condition?.icon && (
              <div className="bg-white/60 rounded-full p-3 shadow-lg flex items-center justify-center transition-transform hover:scale-110 backdrop-blur-md">
                <img
                  src={weatherData.current.condition.icon}
                  alt="weather icon"
                  className="h-16 w-16 drop-shadow-lg"
                />
              </div>
            )}
          </div>
         
          <div className="bg-indigo-100 text-indigo-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Today:</span>{" "}
            {weatherData.current?.last_updated || "--"}
          </div>
          <div className="bg-amber-100 text-amber-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Pressure:</span>{" "}
            {weatherData.current?.pressure_mb ?? "--"} mb
          </div>
          <div className="bg-amber-100 text-amber-700 text-center py-3 rounded-xl shadow">
            <span className="font-semibold">Humidity:</span>{" "}
            {weatherData.current?.humidity ?? "--"}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
