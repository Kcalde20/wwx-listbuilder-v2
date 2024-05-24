import { Routes } from '@angular/router';
import { PosseScreenComponent } from './features/posse-screen/posse-screen.component';
import { ListScreenComponent } from './features/list-screen/list-screen.component';

export const routes: Routes = [
    { path: 'posses/:id', component: PosseScreenComponent },
    { path: '', component: ListScreenComponent },
];
