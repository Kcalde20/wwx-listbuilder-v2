import { Component, inject, model, signal } from '@angular/core';
import { UnitService, iUnit } from '../../shared/unit.service';
import { PosseService, iPosse } from '../../shared/posse.service';
import { ListService } from '../../shared/list.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-list-screen',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule],
    templateUrl: './list-screen.component.html',
    styleUrls: ['./list-screen.component.scss'],
})
export class ListScreenComponent {
    unitService = inject(UnitService);
    posseService = inject(PosseService);
    listService = inject(ListService);

    listName = model<string>(this.listService.listSignal().name);
    listPoints = model<number>(this.listService.listSignal().pointLimit);

    listNameChange($event: Event) {
        this.listService.updateListName(this.listName());
    }

    listPointsChange($event: Event) {
        this.listService.updateListPoints(this.listPoints());
    }

    addPosse(posse: iPosse) {
        this.listService.addPosse(posse);
    }

    removePosse(posseIndex: number) {
        this.listService.removePosse(posseIndex);
    }
}
