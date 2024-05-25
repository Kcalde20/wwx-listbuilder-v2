import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { iUnit, UnitService } from '../../shared/unit.service';
import { PosseService } from '../../shared/posse.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListService } from '../../shared/list.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-posse-screen',
    standalone: true,
    imports: [RouterModule, CommonModule],
    providers: [UnitService, PosseService],
    templateUrl: './posse-screen.component.html',
    styleUrl: './posse-screen.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosseScreenComponent {
    unitService = inject(UnitService);
    posseService = inject(PosseService);
    listService = inject(ListService);
    route = inject(ActivatedRoute);

    myList: iUnit[] = [];
    selectedPosseIndex!: number;
    posseListData = computed(() =>
        this.listService.getPosseById(Number(this.selectedPosseIndex))
    );
    posseIdData = computed(() =>
        this.posseService.getPosseById(this.posseListData().id)
    );

    getId(unitId: number) {
        this.unitService.getUnitById(unitId);
    }

    addUnit(unitId: number) {
        this.listService.addUnit(Number(this.selectedPosseIndex), unitId);
    }

    removeUnit(unitIndex: number) {
        this.listService.removeUnit(Number(this.selectedPosseIndex), unitIndex);
    }

    ngOnInit() {
        this.selectedPosseIndex = Number(
            this.route.snapshot.paramMap.get('id')
        );
    }
}
