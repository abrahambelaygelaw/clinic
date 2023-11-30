import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./auth/Login";
import Drugs from "./drugs/Drugs";
import Transaction from "./transaction/Transaction";
import Navigation from "./Navigation";
import ProtectedRoute from "./ProtectedRoute";
import AllTransaction from "./transaction/AllTransaction";
import Users from "./users/Users";
import { UserContext } from "./Context";
import { useState } from "react";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigation />}>
            <Route path="/users" element={<Users />} />
            <Route path="/drugs" element={<Drugs />} />
            <Route path="/transaction" element={<AllTransaction />} />
            <Route path="/transaction/:id" element={<Transaction />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <div className="bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
