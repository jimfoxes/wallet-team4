import Main from "../components/Main/Main";

import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}

export default MainPage;
