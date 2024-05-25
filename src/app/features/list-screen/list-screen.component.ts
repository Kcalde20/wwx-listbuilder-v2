import { Component, inject } from '@angular/core';
import { UnitService, iUnit } from '../../shared/unit.service';
import { PosseService, iPosse } from '../../shared/posse.service';
import { ListService } from '../../shared/list.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-screen',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './list-screen.component.html',
    styleUrl: './list-screen.component.scss',
})
export class ListScreenComponent {
    unitService = inject(UnitService);
    posseService = inject(PosseService);
    listService = inject(ListService);

    addPosse(posse: iPosse) {
        this.listService.addPosse(posse);
    }

    removePosse(posseIndex: number) {
        this.listService.removePosse(posseIndex);
    }
}
