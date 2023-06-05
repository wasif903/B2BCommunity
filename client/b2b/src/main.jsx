import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// Import Swiper styles
import "react-image-gallery/styles/css/image-gallery.css";
import 'swiper/css';
import { CookiesProvider } from 'react-cookie';

// Redux
import { Provider } from 'react-redux'
import store from './REDUX/Reducers/store';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <UserProvider>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </UserProvider>
      </React.StrictMode>
    </Provider >
  </BrowserRouter>
)
