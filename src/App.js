import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import { CampaignProvider } from "./components/CampaignContext";
import { CommentContextProvider } from "./components/CampaignComment";
import NavBar from "./components/Navbar";
import MainApp from "./pages/MainPage/MainApp";
import RegisterApp from "./pages/RegisterPage/RegisterApp";
import SearchApp from "./pages/SearchPage/SearchApp";
import CampaignDetail from "./pages/SearchPage/CampaignDetail";
import CampaignAuthList from "./pages/SearchPage/CampaignAuthList";
import ProfileApp from "./pages/ProfilePage/ProfileApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <CampaignProvider>
              <NavBar />
            </CampaignProvider>
          }
        >
          <Route path="/" element={<MainApp />} />
          <Route path="/register" element={<RegisterApp />} />
          <Route path="/search" element={<SearchApp />} />
          <Route path="/campaigns/:campaignId" element={<CampaignDetail />} />
          <Route
            path="/campaigns/:campaignId/participations"
            element={
              <CommentContextProvider>
                <CampaignAuthList />
              </CommentContextProvider>
            }
          />
          <Route path="/profile" element={<ProfileApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
