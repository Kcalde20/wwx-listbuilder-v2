import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { iUnit, UnitService } from '../../shared/unit.service';
import { PosseService } from '../../shared/posse.service';

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

    myList: iUnit[] = [];

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
}
