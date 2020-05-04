import { combineReducers } from 'redux';
import WeatherReducuer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducuer
});

export default rootReducer;
