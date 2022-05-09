import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout/Layout";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#fefefe",
    // },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
