import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./auth/Login";
import Drug from "./drugs/Drug";
import Transaction from "./transaction/Transaction";
import Navigation from "./Navigation";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/drug" element={<Drug />} />
          <Route path="/transaction/:id" element={<Transaction />} />
        </Route>
      </>
    )
  );
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
