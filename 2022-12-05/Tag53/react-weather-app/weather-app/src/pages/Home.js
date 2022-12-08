import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
	const [coordData, setCoordData] = useState([]);
	const [location, setLocation] = useState("");
	const [forecast, setForecast] = useState([]);

	function handleClick() {
		const inputvalue = document.querySelector("input").value;
		setLocation(inputvalue);
	}

	const api_key = "c27a1a351c4c3b87fbecf99ff89ca287";

	const fetchData = () => {
		if (location === "") {
			return;
		}
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${api_key}`
		)
			.then((response) => response.json())
			.then((json) => {
				setCoordData(json);
				if (json.length === 0) {
					return;
				}
				fetch(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${json[0].lat}&lon=${json[0].lon}&appid=${api_key}&units=metric`
				)
					.then((response) => response.json())
					.then((json) => {
						setForecast(json);
					});
			});
	};
	useEffect(fetchData, [location]);

	const inputField = () => {
		return (
			<div className="wrapper-input-button">
				<input
					type="text"
					id="message"
					name="message"
					placeholder="Search City"
				/>
				<button onClick={handleClick}>Check Weather</button>
			</div>
		);
	};

	const showWeather = () => {
		if (typeof forecast === "object") {
			if (Object.keys(forecast).length === 0) {
				return;
			}
		}
		if (Array.isArray(forecast)) {
			if (forecast.length === 0) {
				return;
			}
		}

		// console.log(forecast);
		return (
			<div className="wrapper-home">
				<div className="container-home">
					<h2 className="main-city">{coordData[0].name}</h2>
					<p className="main-temp">
						{forecast.list[0].main.temp_max.toFixed(1)}C°
					</p>
					<p className="main-description">
						{forecast.list[0].weather[0].description}
					</p>
					<div className="wrapper-forecast">
						<h2 className="main-city-forecast">
							{forecast.list[6].dt_txt.replace("09:00:00", "")}
						</h2>
						<p className="main-temp-forecast">
							{forecast.list[6].main.temp_max.toFixed(1)}C°
						</p>
						<p className="main-description-forecast">
							{forecast.list[6].weather[0].description}
						</p>
					</div>
					<div className="wrapper-forecast">
						<h2 className="main-city-forecast">
							{forecast.list[14].dt_txt.replace("09:00:00", "")}
						</h2>
						<p className="main-temp-forecast">
							{forecast.list[14].main.temp_max.toFixed(1)}C°
						</p>
						<p className="main-description-forecast">
							{forecast.list[14].weather[0].description}
						</p>
					</div>
					<div className="wrapper-forecast">
						<h2 className="main-city-forecast">
							{forecast.list[22].dt_txt.replace("09:00:00", "")}
						</h2>
						<p className="main-temp-forecast">
							{forecast.list[22].main.temp_max.toFixed(1)}C°
						</p>
						<p className="main-description-forecast">
							{forecast.list[22].weather[0].description}
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="home">
			{inputField()}
			{showWeather()}
		</div>
	);
};
export default Home;
