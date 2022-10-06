import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Timetable from "./components/Table";
import SchoolHoliday from "./routes/SchoolHoliday";

import Navbar from "./routes/Navbar";
import Login from "./components/Login";
import Footer from "./routes/Footer";
import DetailsData from "./routes/DetailsData";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import News from "./routes/News";
import { TableContext } from "./components/TableContext";
import PirateAlbum from "./routes/PirateAlbum";

export default function App() {
  const { state } = useContext(TableContext);
  const isLogin = state.isLogin;
  if (isLogin) {
    return <Login />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Timetable />} />
            <Route path=":detail" element={<DetailsData />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="holiday" element={<SchoolHoliday />} />
          <Route path="news" element={<News />} />
          <Route path="album" element={<PirateAlbum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
