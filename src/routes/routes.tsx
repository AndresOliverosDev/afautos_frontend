import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { UserRole } from '../types';
import { ReportsCustomers, ReportsOrders, ReportsProducts, ReportsSales } from '../pages/reports';
import SingleLayout from '../layout/SingleLayout';
import { Login } from '../pages/auth/login';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import { Customer } from '../pages/customers';
import Orders from '../pages/orders/Orders';
import Sales from '../transactions/sales/SalePage';
import { NotFoundPage, Unauthorized } from '../pages/errors';
import ProductsPage from '../products/ProductsPage';
import CustomerPage from '../users/customers/CustomerPage';


const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<SingleLayout><Login /></SingleLayout>} />
      <Route path='/inicio' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS, UserRole.LOGISTICA]}>
          <MainLayout>
            <Home />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/* Customers */}
      <Route path='/clientes' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <CustomerPage />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/* Products */}
      <Route path='/productos' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS, UserRole.LOGISTICA]}>
          <MainLayout>
            <ProductsPage />
          </MainLayout>
        </ProtectedRoute>
      } />
      
      <Route path='/productos/informes' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <ReportsProducts />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/* Orders */}
      <Route path='/pedidos/informes' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <ReportsOrders />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='/pedidos' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <Orders />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/* Sales */}
      <Route path='/ventas' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <Sales />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='/ventas/informes' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS]}>
          <MainLayout>
            <ReportsSales />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='*' element={<NotFoundPage />} />

      <Route path='/unauthorized' element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.VENTAS, UserRole.LOGISTICA]}>
          <MainLayout>
            <Unauthorized />
          </MainLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default MyRoutes;
