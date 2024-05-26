import { Injectable, computed, signal } from '@angular/core';

export interface iPosse {
    id: string;
    displayName: string;
    description: string;
    composition: string[];
    limitation?: string[];
    bonus?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class PosseService {
    private $PosseListSignal = signal<iPosse[]>([]);
    PosseListSignal = computed(() => this.$PosseListSignal());

    getPosseById(posseId: string) {
        return this.PosseListSignal().find(({ id }) => id === posseId);
    }

    constructor() {
        this.$PosseListSignal.set([
            {
                id: 'lawmenFactionPosse',
                displayName: 'Lawmen Faction Posse',
                description:
                    'This is the most flexible and commonly deployed Posse found in the Lawmen. The broad range of Units available makes this an essential component of any force.',
                composition: [
                    'you MUST include One Boss Unit with the LAWMEN trait.',
                    'you MAY include up to a further four Units with the LAWMEN trait.',
                ],
                limitation: ['you May NOT include more than one of any Unit.'],
                bonus: ['none.'],
            },
            {
                id: 'armouredJusticePosse',
                displayName: 'Armoured Justice Posse',
                description:
                    'ARmoured This is the most flexible and commonly deployed Posse found in the Lawmen. The broad range of Units available makes this an essential component of any force.',
                composition: [
                    'you MUST include One Boss Unit with the LAWMEN trait.',
                    'you MAY include up to a further four Units with the LAWMEN trait.',
                ],
                limitation: ['you May NOT include more than one of any Unit.'],
                bonus: ['none.'],
            },
        ]);
    }
}
