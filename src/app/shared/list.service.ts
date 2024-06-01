import { Injectable, computed, inject, signal } from '@angular/core';
import { PosseService, iPosse } from './posse.service';
import { UnitService, iUnit } from './unit.service';

export interface iList {
    name: string;
    faction: string;
    pointLimit: number;
    posses: any[];
}

@Injectable({
    providedIn: 'root',
})
export class ListService {
    private $listSignal = signal<iList>({
        name: '',
        faction: '',
        pointLimit: 0,
        posses: [],
    });
    listSignal = computed(() => this.$listSignal());

    unitService = inject(UnitService);
    posseService = inject(PosseService);

    listPoints = computed(() => {
        let points = 0;
        const posses = this.listSignal().posses;
        for (let i = 0; i < posses.length; i++) {
            points += this.getPossePoints(i);
        }
        return points;
    });

    getPossePoints(posseIndex: number) {
        let points = 0;
        for (let unit of this.listSignal().posses[posseIndex].units) {
            let unitData = this.unitService.getUnitById(unit.id);
            if (unit.count) {
                points = points + unitData!.points * unit.count;
            } else {
                points = points + unitData!.points;
            }
        }
        return points;
    }

    addPosse(posse: any) {
        this.$listSignal.update((value) => {
            const newPosse = {
                id: posse.id,
                displayName: posse.displayName,
                units: [],
            };
            return {
                ...value,
                posses: [...value.posses, newPosse],
            };
        });
    }

    removePosse(posseIndex: number) {
        this.$listSignal.update((value) => {
            value.posses.splice(posseIndex, 1);
            return { ...value };
        });
    }

    getPosseById(id: number) {
        return this.$listSignal().posses[id];
    }

    addUnit(posseId: number, unitId: string) {
        this.$listSignal.update((value) => {
            if (this.unitService.getUnitById(unitId)?.countMin) {
                value.posses[posseId].units.push({ id: unitId, count: this.unitService.getUnitById(unitId)?.countMin });
            } else {
                value.posses[posseId].units.push({ id: unitId });
            }
            return { ...value };
        });
    }

    increaseUnitCount(posseIndex: number, unitIndex: number) {
        this.$listSignal.update((value) => {
            if (value.posses[posseIndex].units[unitIndex].count && value.posses[posseIndex].units[unitIndex].count < this.unitService.getUnitById(value.posses[posseIndex].units[unitIndex].id)?.countMax!) {
                value.posses[posseIndex].units[unitIndex].count++;
            }
            return { ...value };
        });
    }

    decreaseUnitCount(posseIndex: number, unitIndex: number) {
        this.$listSignal.update((value) => {
            if (value.posses[posseIndex].units[unitIndex].count && value.posses[posseIndex].units[unitIndex].count > this.unitService.getUnitById(value.posses[posseIndex].units[unitIndex].id)?.countMin!) {
                value.posses[posseIndex].units[unitIndex].count--;
            }
            return { ...value };
        });
    }

    // todo
    removeUnit(posseId: number, unitIndex: number) {
        this.$listSignal.update((value) => {
            value.posses[posseId].units.splice(unitIndex, 1);
            return { ...value };
        });
    }

    constructor() {
        this.$listSignal.set({
            name: 'My List',
            faction: 'Lawmen',
            pointLimit: 200,
            posses: [],
        });
    }
}
