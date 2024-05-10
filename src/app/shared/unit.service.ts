import { Injectable, computed, signal } from '@angular/core';

export interface iUnit {
    id: number;
    name: string;
    points: number;
}

@Injectable({
    providedIn: 'root',
})
export class UnitService {
    private $UnitListSignal = signal<iUnit[]>([]);

    UnitListSignal = computed(() => this.$UnitListSignal());

    getUnitById(unitId: number) {
        return this.UnitListSignal().find(({ id }) => id === unitId);
    }

    constructor() {
        this.$UnitListSignal.set([
            { id: 1, name: 'Bass Reeves', points: 19 },
            { id: 2, name: 'Frank Sinatra', points: 8 },
            { id: 3, name: 'Billy The Kid', points: 6 },
        ]);
    }
}
