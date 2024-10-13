import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import GetInvolved from "./components/GetInvolved";
import Research from "./components/Research";
import NewsRoom from "./components/NewsRoom";

function App() {
  return (
    <Router>
      <div className="wrap">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news-room" element={<NewsRoom />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/research" element={<Research />} />

        </Routes>
      </div>
      </div>
    </Router>

  );
}



export default App;
