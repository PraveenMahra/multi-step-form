import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div className="app-layout">
      <MainNav />
      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
