import './App.css'
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Product from './pages/singlepage/Product';
import Products from './pages/product/Products';
import Navbar from './components/navbarfooter/Navbar';
import Footer from './components/navbarfooter/Footer';
import { createBrowserRouter ,Outlet, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';

  const Layout =()=>{
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout />,
        children:[
          {
            path:'/',
            element:<Home />
          },
          {
            path:"/login",
            element:<Login />
          },
          {
            path:"/register",
            element:<Register />
          },
          {
            path:"/products/1",
            element:<Products />
          },
          {
            path:"/product/:id",
            element:<Product />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/contact",
            element:<Contact />
          },
          // {
          //   path: "",
          //   // element: <Root />, 
          //   errorElement: <ErrorPage />,
          // }
        
        ]
      },
    ]);
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
