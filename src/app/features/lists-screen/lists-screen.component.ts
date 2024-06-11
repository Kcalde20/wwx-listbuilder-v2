import { Component, inject } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lists-screen',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './lists-screen.component.html',
    styleUrl: './lists-screen.component.scss',
})
export class ListsScreenComponent {
    listService = inject(ListService);

    setList(listIndex: number) {
        this.listService.currentListIndex = listIndex;
    }

    addList() {
        this.listService.addList();
    }
}
