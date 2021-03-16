import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NoFound from './components/NoFound/NoFound';
import ProductDetails from './components/ProductDetails.js/ProductDetails';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review/:item" >
            <Review></Review>
          </Route>
          <Route path="/inventory" >
            <Inventory></Inventory>
          </Route>
          <Route path="/shipment" >
            <Shipment></Shipment>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route exact path="/" >
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*" >
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
