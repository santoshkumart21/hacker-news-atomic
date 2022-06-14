import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./organisms/Header/header";
import Stories from "./pages/stories";

export default function AppRouter() {
  const navLinks = ["top", "new", "best"];
  return (
    <div>
      <BrowserRouter>
        <Header navList={navLinks} />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              return !navLinks.includes(type) ? (
                <Redirect to="/" />
              ) : (
                <Stories type={type} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
