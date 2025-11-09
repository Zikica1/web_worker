import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import LayoutMain from './components/LayoutMain';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceCardDet from './components/services/ServiceCardDet';
import Showcase from './pages/Showcase';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import BlogCardDet from './components/blog/BlogCardDet';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navigate to='/sr' replace />} />
        <Route path='/en' element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='services/:id' element={<ServiceCardDet />} />
          <Route path='showcase' element={<Showcase />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:id' element={<BlogCardDet />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/sr' element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path='o-nama' element={<About />} />
          <Route path='usluge' element={<Services />} />
          <Route path='usluge/:id' element={<ServiceCardDet />} />
          <Route path='istaknuto' element={<Showcase />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:id' element={<BlogCardDet />} />
          <Route path='kontakt' element={<Contact />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
