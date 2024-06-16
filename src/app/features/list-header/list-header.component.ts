import { Component, inject, signal } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { PosseService } from '../../shared/posse.service';

@Component({
    selector: 'app-list-header',
    standalone: true,
    imports: [],
    templateUrl: './list-header.component.html',
    styleUrl: './list-header.component.scss',
})
export class ListHeaderComponent {
    title = "Kevin's WWX-Listbuilder";

    listService = inject(ListService);

    listIndex = this.listService.currentListIndex();
}
