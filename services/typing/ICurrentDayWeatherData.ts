export interface ICurrentDayWeatherData {
    last_updated: string;
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
    feelslike_c: number;
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    cloud: number;
    vis_km: number;
}