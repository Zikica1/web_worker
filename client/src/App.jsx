import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LayoutMain from './components/LayoutMain';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='showcase' element={<Showcase />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
