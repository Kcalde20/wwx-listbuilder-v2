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

    addPosse(posse: iPosse) {
        this.$listSignal.update((value) => {
            return {
                ...value,
                posses: [...value.posses, posse],
            };
        });
    }

    removePosse(posseId: number) {
        this.$listSignal.update((value) => {
            const updatedPosses = value.posses.filter(
                (posse) => posse.id !== posseId
            );
            return {
                ...value,
                posses: updatedPosses,
            };
        });
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
                    units: [{ id: 1 }, { id: 2 }, { id: 3 }],
                },
            ],
        });
    }
}
