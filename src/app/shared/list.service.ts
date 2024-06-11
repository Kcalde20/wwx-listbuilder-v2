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
    private $listSignal = signal<iList[]>([]);
    listSignal = computed(() => this.$listSignal());

    unitService = inject(UnitService);
    posseService = inject(PosseService);

    listPoints = computed(() => {
        let points = 0;
        const posses = this.listSignal()[0].posses;
        for (let i = 0; i < posses.length; i++) {
            points += this.getPossePoints(i, 0);
        }
        return points;
    });

    currentListIndex = 0;

    getPossePoints(posseIndex: number, listIndex: number) {
        let points = 0;
        for (let unit of this.listSignal()[listIndex].posses[posseIndex].units) {
            let unitData = this.unitService.getUnitById(unit.id);
            if (unit.count) {
                points = points + unitData!.points * unit.count;
            } else {
                points = points + unitData!.points;
            }
        }
        return points;
    }

    addPosse(posse: any, listIndex: number) {
        this.$listSignal.update((value) => {
            const newPosse = {
                id: posse.id,
                displayName: posse.displayName,
                units: [],
            };
            const updatedList = {
                ...value[listIndex],
                posses: [...value[listIndex].posses, newPosse],
            };
            const updatedLists = [...value];
            updatedLists[listIndex] = updatedList;
            return updatedLists;
        });
    }

    removePosse(posseIndex: number, listIndex: number) {
        this.$listSignal.update((value) => {
            const updatedList = { ...value[listIndex] };
            updatedList.posses.splice(posseIndex, 1);
            const updatedLists = [...value];
            updatedLists[listIndex] = updatedList;
            return updatedLists;
        });
    }

    getPosseById(id: number, listIndex: number) {
        return this.$listSignal()[listIndex].posses[id];
    }

    addUnit(posseId: number, unitId: string, listIndex: number) {
        this.$listSignal.update((value) => {
            const newUnit = this.unitService.getUnitById(unitId);
            if (newUnit) {
                const updatedList = { ...value[listIndex] };
                updatedList.posses[posseId].units.push({
                    id: unitId,
                    count: newUnit.countMin || undefined,
                });
                const updatedLists = [...value];
                updatedLists[listIndex] = updatedList;
                return updatedLists;
            }
            return value;
        });
    }

    increaseUnitCount(posseIndex: number, unitIndex: number, listIndex: number) {
        this.$listSignal.update((value) => {
            const unit = value[listIndex].posses[posseIndex].units[unitIndex];
            const unitData = this.unitService.getUnitById(unit.id);
            if (unit.count && unitData?.countMax && unit.count < unitData?.countMax) {
                unit.count++;
            }
            return value;
        });
    }

    decreaseUnitCount(posseIndex: number, unitIndex: number, listIndex: number) {
        this.$listSignal.update((value) => {
            const unit = value[listIndex].posses[posseIndex].units[unitIndex];
            const unitData = this.unitService.getUnitById(unit.id);
            if (unit.count && unitData?.countMin && unit.count > unitData.countMin) {
                unit.count--;
            }
            return value;
        });
    }

    removeUnit(posseId: number, unitIndex: number, listIndex: number) {
        this.$listSignal.update((value) => {
            const updatedList = { ...value[listIndex] };
            updatedList.posses[posseId].units.splice(unitIndex, 1);
            const updatedLists = [...value];
            updatedLists[listIndex] = updatedList;
            return updatedLists;
        });
    }

    updateListName(name: string) {
        this.$listSignal.update((value) => {
            const updatedList = [...value];
            updatedList[this.currentListIndex].name = name;
            return updatedList;
        });
    }

    updateListPoints(pointLimit: number) {
        this.$listSignal.update((value) => {
            const updatedList = [...value];
            updatedList[this.currentListIndex].pointLimit = pointLimit;
            return updatedList;
        });
    }

    addList() {
        this.$listSignal.update((value) => {
            const newValue = [...value];
            newValue.push({
                name: 'new List',
                faction: 'Lawmen',
                pointLimit: 150,
                posses: [],
            });
            return newValue;
        });
    }

    constructor() {
        this.$listSignal.set([
            {
                name: 'My First List',
                faction: 'Lawmen',
                pointLimit: 150,
                posses: [],
            },
            {
                name: 'second List',
                faction: 'Lawmen',
                pointLimit: 150,
                posses: [],
            },
        ]);
    }
}
