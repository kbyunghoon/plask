import ReactDOM from 'react-dom';
import App from 'shared/App';
import reportWebVitals from 'reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
