import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { iUnit, UnitService } from '../../shared/unit.service';
import { PosseService } from '../../shared/posse.service';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../shared/list.service';

@Component({
    selector: 'app-posse-screen',
    standalone: true,
    imports: [],
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
    selectedPosseId!: string | null;
    posseData = computed(() =>
        this.listService.getPosseById(Number(this.selectedPosseId))
    );

    getId(unitId: number) {
        this.unitService.getUnitById(unitId);
    }

    addUnit(unitId: number) {
        this.listService.addUnit(Number(this.selectedPosseId), unitId);
    }

    removeUnit(unitIndex: number) {
        this.listService.removeUnit(Number(this.selectedPosseId), unitIndex);
    }

    ngOnInit() {
        this.selectedPosseId = this.route.snapshot.paramMap.get('id');
    }
}
