import { lazy } from "solid-js";
import { Route, Routes } from "solid-start";
import MainLayout from "~/ui/layouts/main/main";

const Home = lazy(() => import("./index"));
const User = lazy(() => import("./user/index"));

const CustomRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/users" component={User} />
    </Routes>
  );
};

export default CustomRouter;
