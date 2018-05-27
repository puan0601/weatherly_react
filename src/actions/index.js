const API_KEY = 'b40ce07e5cfece4d1f6c5233ee88d75b';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}