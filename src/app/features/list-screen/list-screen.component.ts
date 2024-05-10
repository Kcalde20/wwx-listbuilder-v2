import { Component, inject } from '@angular/core';
import { UnitService, iUnit } from '../../shared/unit.service';
import { PosseService, iPosse } from '../../shared/posse.service';
import { ListService } from '../../shared/list.service';

@Component({
    selector: 'app-list-screen',
    standalone: true,
    imports: [],
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

    removePosse(posseId: number) {
        this.listService.removePosse(posseId);
    }
}
