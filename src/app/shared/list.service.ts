import { Injectable, computed, inject, signal } from '@angular/core';
import { PosseService, iPosse } from './posse.service';
import { UnitService, iUnit } from './unit.service';

export interface iList {
    name: string;
    faction: string;
    points: number;
    posses: any[];
}

@Injectable({
    providedIn: 'root',
})
export class ListService {
    private $listSignal = signal<iList>({
        name: '',
        faction: '',
        points: 0,
        posses: [],
    });
    listSignal = computed(() => this.$listSignal());

    unitService = inject(UnitService);
    posseService = inject(PosseService);

    addPosse(posse: any) {
        this.$listSignal.update((value) => {
            posse.units = [];
            return {
                ...value,
                posses: [...value.posses, posse],
            };
        });
    }

    removePosse(posseIndex: number) {
        this.$listSignal.update((value) => {
            value.posses.splice(posseIndex, 1);
            return value;
        });
    }

    getPosseById(id: number) {
        return this.$listSignal().posses[id];
    }

    constructor() {
        this.$listSignal.set({
            name: 'My List',
            faction: 'Lawmen',
            points: 200,
            posses: [
                {
                    id: 1,
                    name: 'Lawmen Faction Posse',
                    units: [{ id: 1 }, { id: 2 }, { id: 2 }],
                },
                {
                    id: 2,
                    name: 'Armoured Justice  Posse',
                    units: [{ id: 1 }, { id: 2 }],
                },
            ],
        });
    }
}
