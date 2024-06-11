import { Component, inject, model, signal } from '@angular/core';
import { UnitService, iUnit } from '../../shared/unit.service';
import { PosseService, iPosse } from '../../shared/posse.service';
import { ListService } from '../../shared/list.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListHeaderComponent } from '../list-header/list-header.component';

@Component({
    selector: 'app-list-screen',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule, ListHeaderComponent],
    templateUrl: './list-screen.component.html',
    styleUrls: ['./list-screen.component.scss'],
})
export class ListScreenComponent {
    unitService = inject(UnitService);
    posseService = inject(PosseService);
    listService = inject(ListService);

    listName = model<string>('loading');
    listPoints = model<number>(0);

    listIndex: number = this.listService.currentListIndex;

    listNameChange($event: Event) {
        this.listService.updateListName(this.listName());
    }

    listPointsChange($event: Event) {
        this.listService.updateListPoints(this.listPoints());
    }

    addPosse(posse: iPosse, listIndex: number) {
        this.listService.addPosse(posse, listIndex);
    }

    removePosse(posseIndex: number, listIndex: number) {
        this.listService.removePosse(posseIndex, listIndex);
    }

    ngOnInit() {
        this.listIndex = this.listService.currentListIndex;
        this.listName.set(this.listService.listSignal()[this.listIndex].name);
        this.listPoints.set(this.listService.listSignal()[this.listIndex].pointLimit);
    }
}
