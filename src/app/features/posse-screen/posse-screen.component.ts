import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { iUnit, UnitService } from '../../shared/unit.service';
import { PosseService } from '../../shared/posse.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListService } from '../../shared/list.service';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from '../list-header/list-header.component';

@Component({
    selector: 'app-posse-screen',
    standalone: true,
    imports: [RouterModule, CommonModule, ListHeaderComponent],
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
    listIndex: number = this.listService.currentListIndex();
    selectedPosseIndex!: number;
    posseListData = computed(() => this.listService.getPosseById(Number(this.selectedPosseIndex), this.listIndex));
    posseIdData = computed(() => this.posseService.getPosseById(this.posseListData().id));

    getId(unitId: string) {
        this.unitService.getUnitById(unitId);
    }

    addUnit(unitId: string, listIndex: number) {
        this.listService.addUnit(Number(this.selectedPosseIndex), unitId, listIndex);
    }

    removeUnit(unitIndex: number, listIndex: number) {
        this.listService.removeUnit(Number(this.selectedPosseIndex), unitIndex, listIndex);
    }

    increaseUnitCount(unitIndex: number, listIndex: number) {
        this.listService.increaseUnitCount(this.selectedPosseIndex, unitIndex, listIndex);
    }

    decreaseUnitCount(unitIndex: number, listIndex: number) {
        this.listService.decreaseUnitCount(this.selectedPosseIndex, unitIndex, listIndex);
    }

    ngOnInit() {
        this.selectedPosseIndex = Number(this.route.snapshot.paramMap.get('posseId'));
    }
}
