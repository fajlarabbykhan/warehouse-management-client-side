import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import AllItems from './Pages/Home/AllItems/AllItems';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Signin from './Pages/Signin/Signin/Signin';
import Signup from './Pages/Signin/Signup/Signup';
import AllSameItems from './Pages/AllSameItems/AllSameItems';
import RequireAuth from './Pages/Signin/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>

        }></Route>
        <Route path='/allItems' element={<AllItems></AllItems>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>



        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
