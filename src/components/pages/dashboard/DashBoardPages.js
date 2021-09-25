import Account from "./Account";
import Analytics from "./Analytics";
import DashBoardPosts from "./DashBoardPosts";
import Companies from "./Companies";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router";
const DashBoardPages = () => {
  return (
    <div>
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
