import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Home } from '../pages/home';
import { Products } from '../pages/products';
import { ReportsCustomers, ReportsOrders, ReportsProducts, ReportsSales } from "../pages/reports"

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      {/** Products */}
      <Route path='/productos' element={
        <MainLayout>
          <Products />
        </MainLayout>
      } />
      <Route path='/productos/informes' element={
        <MainLayout>
          <ReportsProducts />
        </MainLayout>
      } />
      {/** Orders */}
      <Route path='/pedidos/informes' element={
        <MainLayout>
          <ReportsOrders />
        </MainLayout>
      } />
            {/** Customers */}
            <Route path='/clientes/informes' element={
        <MainLayout>
          <ReportsCustomers />
        </MainLayout>
      } />
            {/** Sales */}
            <Route path='/ventas/informes' element={
        <MainLayout>
          <ReportsSales />
        </MainLayout>
      } />

    </Routes>
  );
}

export default MyRoutes;
