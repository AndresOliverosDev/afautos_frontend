import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import { ReportsCustomers, ReportsOrders, ReportsProducts, ReportsSales } from "../pages/reports";
import Login from '../pages/auth/login/Login';
import SingleLayout from '../layout/SingleLayout';
import ProtectedRoute from './ProtectedRoute';
import { NotFoundPage, Unauthorized } from '../pages/errors/index';
import { Customer } from '../pages/customers/index';
import Sales from '../pages/sales/Sales';
import Orders from "../pages/orders/Orders"
import Category from "../pages/products/category/CategoryPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SingleLayout><Login /></SingleLayout>} />

      <Route path='/inicio' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS', 'ROLE_LOGISTICA']}>
          <MainLayout>
            <Home />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/** Customers */}
      <Route path='/clientes' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <Customer />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/** Products */}
      <Route path='/productos' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS', 'ROLE_LOGISTICA']}>
          <MainLayout>
            <Products />
          </MainLayout>
        </ProtectedRoute>
      } />
      <Route path='/productos/informes' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <ReportsProducts />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='/categorias' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
          <MainLayout>
            <Category />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/** Orders */}
      <Route path='/pedidos/informes' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <ReportsOrders />
          </MainLayout>
        </ProtectedRoute>
      } />

<Route path='/pedidos' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <Orders />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/** Customers */}
      <Route path='/clientes/informes' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <ReportsCustomers />
          </MainLayout>
        </ProtectedRoute>
      } />

      {/** Sales */}
      <Route path='/ventas' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <Sales />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='/ventas/informes' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS']}>
          <MainLayout>
            <ReportsSales />
          </MainLayout>
        </ProtectedRoute>
      } />

      <Route path='*' element={<NotFoundPage />} />

      <Route path='/unauthorized' element={
        <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_VENTAS', 'ROLE_LOGISTICA']}>
          <MainLayout>
            <Unauthorized />
          </MainLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default MyRoutes;
