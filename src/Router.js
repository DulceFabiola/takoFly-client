//IMPORTACIONES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Reservation from "./pages/Reservations";

import Layout from "./components/Layout";
import User from "./pages/User";
import AirportProvider from "./context/Airports/AirportsProvider";
const Router = () => {
  return (
    <>
      <AirportProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<h1>404</h1>} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/my-reservations" element={<Reservation />} />
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AirportProvider>
    </>
  );
};

export default Router;
