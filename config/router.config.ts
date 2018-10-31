import { Routes } from '@angular/router';

export const moduleRoutes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
];