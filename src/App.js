import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import UserContext from "./Utilis/UserContext";
import "./App.css";
import { Outlet } from "react-router-dom";
import appStore from "./Utilis/appStore";
import { Provider } from "react-redux";

function App() {
  const [userName, setUsername] = useState();
  useEffect(() => {
    const data = {
      name: "pandikumar",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
