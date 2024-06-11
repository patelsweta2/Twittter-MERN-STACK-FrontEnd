import { Route, Routes } from "react-router-dom";
import PersistLogin from "./components/PersistLogin.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
const RegisterPage = React.lazy(() => import("./pages/RegisterPage.jsx"));
const LoginPage = React.lazy(() => import("./pages/LoginPage.jsx"));
const ResetPasswordPage = React.lazy(() =>
  import("./pages/ResetPasswordPage.jsx")
);

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<AuthLayout />}>
        <Route path="" index element={<LoginPage />} />
        <Route path="" index element={<RegisterPage />} />
        <Route path="" index element={<ResetPasswordPage />} />
      </Route>
    </Routes>
  );
};

export default App;
