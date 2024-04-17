import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Products, ProductsNav } from '../pages/products';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
        <MainLayout>
          <Products />
        </MainLayout>
      }/>
        <Route path='/sidebar' element={
        <MainLayout />
      }/>
    </Routes>
  );
}

export default MyRoutes;
