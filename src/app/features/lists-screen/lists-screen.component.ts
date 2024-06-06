import { Component, inject } from '@angular/core';
import { ListsService } from '../../shared/lists.service';

@Component({
    selector: 'app-lists-screen',
    standalone: true,
    imports: [],
    templateUrl: './lists-screen.component.html',
    styleUrl: './lists-screen.component.scss',
})
export class ListsScreenComponent {
    listsService = inject(ListsService);
}
