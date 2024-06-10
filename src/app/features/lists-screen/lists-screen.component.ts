import { Component, inject } from '@angular/core';
import { ListService } from '../../shared/list.service';

@Component({
    selector: 'app-lists-screen',
    standalone: true,
    imports: [],
    templateUrl: './lists-screen.component.html',
    styleUrl: './lists-screen.component.scss',
})
export class ListsScreenComponent {
    listService = inject(ListService);
}
