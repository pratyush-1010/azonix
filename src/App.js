import logo from './logo.svg';
import './App.css';
import './Design.css';
import './Sm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Appbar from './Components/Appbar'
import Home from './Components/Home';
import About from './Components/About';
import Cat from './Components/Cat';
import Single from './Components/Single';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Shop from './Components/Shop';
import Spro from './Components/Spro';
import Contact from './Components/Contact'
import Search from './Components/Search';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import PublicRoute from './Components/auth/PublicRoute';
import ProtectedRoute from './Components/auth/ProtectedRoute';
import Checkout from './Components/Checkout';
import Admin from './Components/Admin';
import EditUser from './Components/EditUser';
import OrderPlaced from './Components/OrderPlaced';
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Appbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:cat' element={<Cat/>}/>
        {/* <Route path='/product/:cat' element={<Cat/>}/> */}
        <Route path='/singlepro/:sin' element={<Single/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/shop/' element={<Shop><Spro></Spro></Shop>}/> */}
        <Route path='/shop/:par' element={<Shop><Spro></Spro></Shop>}/>
        {/* <Route path='/shop/e' element={<Shop></Shop>}/> */}
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}></Route>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}></Route>
        <Route path='/edituser' element={<EditUser/>}></Route>
        <Route path='/orderplaced' element={<OrderPlaced/>}></Route>

      </Routes>
      {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
