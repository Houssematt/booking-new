import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import {store} from "./redux/store"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider store={store}>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
  </Provider>,
);
