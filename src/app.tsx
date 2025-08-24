import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.tsx';
import { CartProvider } from './hooks/useCart.tsx';
import { Layout } from './components/Layout.tsx';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import { Home } from './pages/Home.tsx';
import { ProductDetail } from './pages/ProductDetail.tsx';
import { Cart } from './pages/Cart.tsx';
import { Checkout } from './pages/Checkout.tsx';
import { Orders } from './pages/Orders.tsx';
import { Login } from './pages/Login.tsx';
import { Signup } from './pages/Signup.tsx';
import { AdminDashboard } from './pages/admin/AdminDashboard.tsx';
import { ProductManagement } from './pages/admin/ProductManagement.tsx';
import { ProductForm } from './pages/admin/ProductForm.tsx';
import { OrderManagement } from './pages/admin/OrderManagement.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                
                {/* Protected Routes */}
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="orders"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />
                
                {/* Admin Routes */}
                <Route
                  path="admin"
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="admin/products"
                  element={
                    <ProtectedRoute adminOnly>
                      <ProductManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="admin/products/new"
                  element={
                    <ProtectedRoute adminOnly>
                      <ProductForm />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="admin/products/:id/edit"
                  element={
                    <ProtectedRoute adminOnly>
                      <ProductForm />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="admin/orders"
                  element={
                    <ProtectedRoute adminOnly>
                      <OrderManagement />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;