import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/"  exact >
            <Redirect to='/welcome'/></Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:productId" component={ProductDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
