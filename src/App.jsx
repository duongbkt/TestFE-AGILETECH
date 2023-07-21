import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import HomePage from "./pages/HomePage";
import PrivateRouter from "./component/PrivaterRouter";
import LayoutProfile from "./layout/LayoutProfile";
import EditProfile from "./component/EditProfile";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="profile"
        element={
          <PrivateRouter>
            <LayoutProfile />
          </PrivateRouter>
        }
      >
        <Route path="" element={<ProfilePage />} />
        <Route path="create" element={<EditProfile />} />
        <Route path="edit/:id" element={<EditProfile />} />
      </Route>
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
