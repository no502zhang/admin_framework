import { Routes } from '@angular/router';

export const moduleRoutes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
];

export const fullscreenRoutes: Routes = [
    { path: 'passport', loadChildren: './passport/passport.module#PassportModule' },
];