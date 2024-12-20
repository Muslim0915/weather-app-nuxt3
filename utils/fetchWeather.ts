export async function fetchWeather(city: string) {
    const config = useRuntimeConfig();
    const apiKey = config.public.weatherApiKey;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=yes&alerts=yes`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}
