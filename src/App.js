import {
  createBrowserRouter as CBR,
  createRoutesFromElements as CRFE,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppWrapper from "./component /AppWrapper";
import SignUp from "./component /SignUp";

function App() {
  const router = CBR(
    CRFE(
      <Route path="/" element={<Root />}>
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default App;
