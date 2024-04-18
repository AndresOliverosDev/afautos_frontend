import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Home } from '../pages/home';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
        <MainLayout>
          <Home />
        </MainLayout>
      }/>
        <Route path='/sidebar' element={
        <MainLayout />
      }/>
    </Routes>
  );
}

export default MyRoutes;
