import HomePage from "./HomePage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddMedication from "./AddMedication";
import ShowMedications from "./ShowMedications";
import Test from "./Test";
import Delete from "./Delete";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddMedication />} />
        <Route path="/show" element={<ShowMedications />} />
        <Route path="/test" element={<Test />} />
        <Route path="/delete" element={<Delete />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
