import { Component, inject } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { RouterLink } from '@angular/router';
import { UnitCardComponent } from '../unit-card/unit-card.component';

@Component({
    selector: 'app-lists-screen',
    standalone: true,
    imports: [RouterLink, UnitCardComponent],
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

    removeList(listIndex: number) {
        this.listService.removeList(listIndex);
    }
}
