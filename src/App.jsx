import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "./routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </>
  );
}

export default App;
