import React from "react";
import Bookmark from "./components/Bookmark";
import Home from "./components/Home";
import Random from "./components/Random";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Bussiness from "./Tags/Bussiness";
import Wisdom from "./Tags/Wisdom";
import Famous from "./Tags/Famous";
import Success from "./Tags/Success";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Random" element={<Random />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Bussiness" element={<Bussiness />} />
          <Route path="/Wisdom" element={<Wisdom />} />
          <Route path="/Famous" element={<Famous />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
