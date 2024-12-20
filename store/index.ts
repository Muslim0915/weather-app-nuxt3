import { createStore } from 'vuex';
import { fetchWeather as fetchWeatherAPI } from "~/utils/fetchWeather";


const store = createStore({
    state: () => ({
        weather: {},
        city: '',
        theme: 'light',
        isLoading: false,
    }),
    mutations: {
        setWeather(state, weather) {
            state.weather = weather;
        },
        setCity(state, city) {
            state.city = city;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setTheme(state, theme) {
            state.theme = theme;
        },
    },
    actions: {
        async fetchWeather({ commit }, city) {
            commit('setLoading', true);
            try {
                // Если город передан, используем его, иначе определяем местоположение
                const location = city || (await getCurrentLocation());
                commit('setCity', location);

                const weatherData = await fetchWeatherAPI(location);
                commit('setWeather', weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                commit('setLoading', false);
            }
        },
        toggleTheme({ commit }) {
            commit('setTheme', this.state.theme === 'light' ? 'dark' : 'light');
        },
    },
});

export default store;
