import Account from "./Account";
import Analytics from "./Analytics";
import DashBoardPosts from "./DashBoardPosts";
import Companies from "./Companies";
import { Switch, Route } from "react-router-dom";
const DashBoardPages = () => {
  return (
    <div style={{ width: "100%" }}>
      <Switch>
        <Route path="/dashboard/account">
          <Account />
        </Route>
        <Route path="/dashboard/analytics">
          <Analytics />
        </Route>
        <Route path="/dashboard/companies">
          <Companies />
        </Route>
        <Route path="/dashboard">
          <DashBoardPosts />
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoardPages;
