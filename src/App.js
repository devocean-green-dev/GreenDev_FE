import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./styles/App.scss";
import { CampaignProvider } from "./components/CampaignContext";
import { CommentContextProvider } from "./components/CampaignComment";
import NavBar from "./components/Navbar";
import MainApp from "./pages/MainPage/MainApp";
import RegisterApp from "./pages/RegisterPage/RegisterApp";
import SearchApp from "./pages/SearchPage/SearchApp";
import CampaignDetail from "./pages/SearchPage/CampaignDetail";
import CampaignAuthList from "./pages/SearchPage/CampaignAuthList";
import CampaignAuthPost from "./pages/SearchPage/CampaignAuthPost";
import ProfileApp from "./pages/ProfilePage/ProfileApp";
import LoginApp from "./pages/LoginPage/LoginApp";
import OAuthRedirect from "./pages/LoginPage/OAuthRedirect";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route
            element={
              <CampaignProvider>
                <NavBar />
              </CampaignProvider>
            }
          >
            <Route
              path="/home"
              element={
                <CommentContextProvider>
                  <MainApp />
                </CommentContextProvider>
              }
            />
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
            <Route
              path="/campaigns/:campaignId/participations/post"
              element={<CampaignAuthPost />}
            />
            <Route path="/profile" element={<ProfileApp />} />
          </Route>
          <Route path="/" element={<LoginApp />} />
          <Route path="/oauth2/redirect" element={<OAuthRedirect />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
