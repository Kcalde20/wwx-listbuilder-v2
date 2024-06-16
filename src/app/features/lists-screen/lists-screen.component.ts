import { Component, inject } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lists-screen',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './lists-screen.component.html',
    styleUrl: './lists-screen.component.scss',
})
export class ListsScreenComponent {
    title = "Kevin's WWX-Listbuilder";
    listService = inject(ListService);

    setList(listIndex: number) {
        this.listService.currentListIndex.set(listIndex);
    }

    addList() {
        this.listService.addList();
    }
}
