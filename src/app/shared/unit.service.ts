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
            { id: 'annieMozee', displayName: 'Annie Mozee', points: 16 },
            { id: 'bosseReeves', displayName: 'Bass Reeves', points: 19 },
            { id: 'blackhoof2020', displayName: 'Blackhoof 20-20', points: 15 },
            { id: 'calamityJane', displayName: 'Calamity Jane', points: 12 },
            {
                id: 'deputizedGunslingers',
                displayName: 'Deputized Gunslingers',
                points: 2,
            },
            {
                id: 'deputizedSharpshooters',
                displayName: 'Deputized Sharpshooters',
                points: 2,
            },
            {
                id: 'deputizedSupportTeam',
                displayName: 'Deputized Support Team',
                points: 4,
            },
            { id: 'docHolliday', displayName: 'Doc Holliday', points: 16 },
            { id: 'furioMontoya', displayName: 'Furio Montoya', points: 13 },
            { id: 'graceMyrtle', displayName: 'Grace Myrtle', points: 12 },
            { id: 'helenaMiller', displayName: 'Helena Miller', points: 19 },
            {
                id: 'hwkScoutAutomata',
                displayName: 'HWK Scout Automata',
                points: 4,
            },
            { id: 'idaSaxon', displayName: 'Ida Saxon', points: 14 },
            {
                id: 'ironHorseDeputies',
                displayName: 'Iron Horse Deputies',
                points: 8,
            },
            { id: 'jedrickPowell', displayName: 'Jedrick Powell', points: 15 },
            {
                id: 'jedrickPowell&2020',
                displayName: 'Jedrick Powell & 20-20',
                points: 21,
            },
            {
                id: 'k9AttackDogPack',
                displayName: 'K9 Attack Dog Pack',
                points: 2,
            },
            { id: 'k9GuardDog', displayName: 'K9 Guard Dog', points: 3 },
            { id: 'k9GunDogPack', displayName: 'K9 Gun Dog Pack', points: 5 },
            { id: 'kingsleyStern', displayName: 'Kingsley Stern', points: 17 },
            { id: 'MercuryJones', displayName: 'Mercury Jones', points: 13 },
            { id: 'mickIronclad', displayName: 'Mick Ironclad', points: 10 },
            { id: 'missyCopelie', displayName: 'Missy Copelie', points: 11 },
            { id: 'morganEarp', displayName: 'Morgan Earp', points: 18 },
            {
                id: 'morganEarpLegend',
                displayName: 'Morgan Earp (Legendary)',
                points: 21,
            },
            { id: 'nateBerenger', displayName: 'Nate Berenger', points: 14 },
            { id: 'patGarrett', displayName: 'Pat Garrett', points: 12 },
            {
                id: 'rabeccaCopelie',
                displayName: 'Rabecca Copelie',
                points: 10,
            },
            {
                id: 'rangerBlackjack',
                displayName: 'Ranger Blackjack',
                points: 10,
            },
            {
                id: 'rangerHeavyInterceptor',
                displayName: 'Ranger Heavy Interceptor',
                points: 7,
            },
        ]);
    }
}
