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
    posseData!: any;
    posseDataMap = computed(() => {
        const currentPosse = this.listService.getPosseById(
            Number(this.selectedPosseId)
        );
        currentPosse.units.map((e: any) => {
            const unitServiceData = this.unitService
                .UnitListSignal()
                .find((unit) => unit.id === e.id);
            (e.name = unitServiceData?.name),
                (e.points = unitServiceData?.points);

            return e;
        });

        return currentPosse;
    });

    getId(unitId: number) {
        console.log(this.unitService.getUnitById(unitId));
    }

    addUnit(unitId: number) {
        let newModel: any = this.unitService.getUnitById(unitId);
        this.myList.push(newModel);
        console.log(this.myList);
    }

    removeUnit(unitIndex: number) {
        if (unitIndex > -1) {
            this.myList.splice(unitIndex, 1);
        }
    }

    ngOnInit() {
        this.selectedPosseId = this.route.snapshot.paramMap.get('id');
        this.posseData = signal(
            this.listService.getPosseById(Number(this.selectedPosseId))
        );
    }
}
