import React, { useEffect, useState } from "react";

const Weather = () => {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		document.title = "Weather";
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d87bb13e7c5fe1c4564f928f54c4c446&units=metric`
					)
						.then((response) => {
							if (!response.ok) {
								throw new Error("Network response was not ok");
							}
							return response.json();
						})
						.then((data) => setWeather(data))
						.catch((error) => setError(error.toString()));
				},
				(geoError) => {
					setError(geoError.message);
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, []);

	return (
		<div>
			{error ? (
				<div>Error: {error}</div>
			) : weather ? (
				<div>
					<h1>{weather.name}</h1>
					<p>Temperature: {weather.main.temp}°C</p>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Weather;
