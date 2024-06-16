import { Routes } from '@angular/router';
import { PosseScreenComponent } from './features/posse-screen/posse-screen.component';
import { ListScreenComponent } from './features/list-screen/list-screen.component';
import { ListsScreenComponent } from './features/lists-screen/lists-screen.component';

export const routes: Routes = [
    { path: '', component: ListsScreenComponent },
    { path: 'lists/:listId', component: ListScreenComponent },
    { path: 'lists/:listId/posses/:posseId', component: PosseScreenComponent },
];
