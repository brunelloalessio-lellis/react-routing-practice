import classes from "./Layout.module.css";
import { Redirect, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AllQuotes from "../../pages/AllQuotes";
import QuoteDetail from "../../pages/QuoteDetail";
import NewQuote from "../../pages/NewQuote";

const Layout = (props) => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;