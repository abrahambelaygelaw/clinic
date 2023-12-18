import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import { AuthProvider } from "./context/AuthProvider.jsx";
import UsersPage from "./pages/UsersPage";
import DrugsPage from "./pages/DrugsPage";
import AllTransactionsPage from "./pages/AllTransactionsPage";
import TransactionPage from "./pages/TransactionPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<ProtectedRoute allowedRoles={["admin", "user"]} />}>
          <Route path="/drugs" element={<DrugsPage />} />
          <Route path="/transaction" element={<AllTransactionsPage />} />
          <Route path="/transaction/:id" element={<TransactionPage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </>
    )
  );

  return (
    <AuthProvider>
      <div className="bg-gray-50">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
