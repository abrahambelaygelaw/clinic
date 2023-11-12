import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./user/Login";
import Drug from "./drugs/Drug";
import DrugTransaction from "./transaction/DrugTransaction";
import Navigation from "./Navigation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drug" element={<Drug />} />
        <Route path="/drug/:id" element={<DrugTransaction />} />
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
