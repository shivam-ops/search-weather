import axios from 'axios';

const API_KEY = '36ef969e6b6a5914d91a00fa90a4adcf';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},jp`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}