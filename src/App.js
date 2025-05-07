import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Best and cozy family restaurant in city, best prices." />
        <meta property="og:title" content="Wonderful family Little Lemon restaurant" />
        <meta property="og:description" content="Best and cozy family restaurant in city, best prices and service." />
      </Helmet>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>}></Route>
        <Route path="/booking" element={<MainLayout><BookingPage /></MainLayout>}></Route>
      </Routes>
    </>
  );
}

export default App;
