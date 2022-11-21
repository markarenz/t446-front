import React from "react";
import "./css/app.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/common/ScrollToTop";
// import Analytics from 'react-router-ga';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainMenu from "./components/common/MainMenu";
import TopModal from "./components/common/TopModal";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageBuilderPage from "./components/PageBuilderPage";

import theme from "./css/mui-theme";
import GalleryDetailPage from "./components/GalleryDetailPage";

function App() {
  const [settings, setSettings] = React.useState([]);
  const [alerts, setAlerts] = React.useState([]);
  const [galleries, setGalleries] = React.useState([]);
  const [pages, setPages] = React.useState([]);
  const [topModalActive, setTopModalActive] = React.useState(false);
  const [topModalContent, setTopModalContent] = React.useState("");
  const [menuActive, setMenuActive] = React.useState(false);
  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
    // scroll menu to top
    // window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    fetch(process.env.REACT_APP__AWS__BASE_DIR + "data/settings.json")
      .then(res => res.json())
      .then(data => {
        setSettings(data);
      });
    fetch(process.env.REACT_APP__AWS__BASE_DIR + "data/pages.json")
      .then(res => res.json())
      .then(data => {
        setPages(data);
      });
    fetch(process.env.REACT_APP__AWS__BASE_DIR + "data/alerts.json")
      .then(res => res.json())
      .then(data => {
        setAlerts(data);
      });
    fetch(process.env.REACT_APP__AWS__BASE_DIR + "data/galleries.json")
      .then(res => res.json())
      .then(data => {
        setGalleries(data);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <BrowserRouter>
          {/* <Analytics id="UA-166019119-1" debug> */}
          <ScrollToTop />
          <Header
            settings={settings}
            handleToggleMenu={handleToggleMenu}
            menuActive={menuActive}
          />
          <Switch>
            <Route
                path="/gallery/:slug"
                render={() => (
                    <GalleryDetailPage
                        galleries={galleries}
                        settings={settings}
                        setTopModalActive={setTopModalActive}
                        setTopModalContent={setTopModalContent}
                    />
                )}
            />
            <Route
              path="/*"
              render={() => (
                <PageBuilderPage
                  pages={pages}
                  alerts={alerts}
                  galleries={galleries}
                  settings={settings}
                  setTopModalActive={setTopModalActive}
                  setTopModalContent={setTopModalContent}
                />
              )}
            />
          </Switch>
          <Footer />
          <MainMenu
            settings={settings}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
          {topModalActive && (
            <TopModal
              setTopModalActive={setTopModalActive}
              topModalContent={topModalContent}
            />
          )}
          {/* </Analytics> */}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
