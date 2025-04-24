document.getElementById("weather").innerHTML = `
  <h2 class="text-xl font-bold mb-4">Weather</h2>
  <input id="city-input" type="text" placeholder="Enter city..." 
    class="border p-2 w-full rounded mb-2 focus:outline-none focus:ring" />
  <button id="get-weather" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
    Get Weather
  </button>
  <div id="weather-result" class="text-center space-y-2"></div>
`;

const apiKey = "e95f27046cf7779f86b8abc0491fd991"; // Replace this with your actual OpenWeatherMap API key

document.getElementById("get-weather").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value.trim();
  const resultDiv = document.getElementById("weather-result");

  if (!city) return (resultDiv.innerHTML = "Please enter a city.");

  resultDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = "City not found.";
      return;
    }

    const { main, weather, name } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    resultDiv.innerHTML = `
      <h3 class="text-lg font-semibold">${name}</h3>
      <img src="${icon}" alt="${weather[0].description}" class="mx-auto" />
      <p class="text-xl">${main.temp}°C</p>
      <p class="capitalize">${weather[0].description}</p>
    `;
  } catch (err) {
    console.error("Fetch Error:", err);
    resultDiv.innerHTML = "Error fetching weather.";
  }
});
