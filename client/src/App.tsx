import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage"; // Ensure correct import path
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  const routes = [
    { path: "/signin", element: <SignInPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
  ];
  return (
    <ThemeProvider theme={theme || {}}>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
