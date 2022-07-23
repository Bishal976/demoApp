import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer/index';

const store = configureStore({reducer: { rootReducer }}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());
  
export default store;