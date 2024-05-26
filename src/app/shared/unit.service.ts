import { Injectable, computed, signal } from '@angular/core';

export interface iUnit {
    id: string;
    displayName: string;
    points: number;
}

@Injectable({
    providedIn: 'root',
})
export class UnitService {
    private $UnitListSignal = signal<iUnit[]>([]);

    UnitListSignal = computed(() => this.$UnitListSignal());

    getUnitById(unitId: string) {
        return this.UnitListSignal().find(({ id }) => id === unitId);
    }

    constructor() {
        this.$UnitListSignal.set([
            { id: 'bassReeves', displayName: 'Bass Reeves', points: 19 },
            { id: 'frankSinatra', displayName: 'Frank Sinatra', points: 8 },
            { id: 'billyTheKid', displayName: 'Billy The Kid', points: 6 },
        ]);
    }
}
