import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AdminGuard] },
    { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AdminGuard] },
    { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AdminGuard] },
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminGuard] },
    { path: '', component: HomeComponent },
];
