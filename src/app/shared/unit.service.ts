import { Injectable, computed, signal } from '@angular/core';

export interface iUnit {
    id: string;
    displayName: string;
    points: number;
    traits: string[];
    countMin?: number;
    countMax?: number;
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

    getUnitsByTrait(unitTrait: string) {
        return this.$UnitListSignal().filter((unit) => unit.traits?.includes(unitTrait));
    }

    constructor() {
        this.$UnitListSignal.set([
            {
                id: 'annieMozee',
                displayName: 'Annie Mozee',
                points: 16,
                traits: ['Face', 'Legendary', 'Outlaws', 'Lawmen', 'Hex', 'Mercenary', 'Ranger', 'Cowboys'],
            },
            {
                id: 'bosseReeves',
                displayName: 'Bass Reeves',
                points: 19,
                traits: ['Boss', 'Lawmen', 'Marshal'],
            },
            {
                id: 'blackhoof2020',
                displayName: 'Blackhoof 20-20',
                points: 15,
                traits: ['Face', 'Lawmen', 'Automata', 'Agent', 'Equus Simulacra'],
            },
            {
                id: 'calamityJane',
                displayName: 'Calamity Jane',
                points: 12,
                traits: ['Face', 'Legendary', 'Outlaws', 'Mercenary', 'Ranger'],
            },
            {
                id: 'deputizedGunslingers',
                displayName: 'Deputized Gunslingers',
                points: 2,
                traits: ['Hands', 'Lawmen', 'Deputy'],
                countMin: 3,
                countMax: 6,
            },
            {
                id: 'deputizedSharpshooters',
                displayName: 'Deputized Sharpshooters',
                points: 2,
                traits: ['Hands', 'Lawmen', 'Deputy'],
                countMin: 3,
                countMax: 6,
            },
            {
                id: 'deputizedSupportTeam',
                displayName: 'Deputized Support Team',
                points: 4,
                traits: ['Support', 'Lawmen', 'Deputy', 'Fire Team'],
                countMin: 1,
                countMax: 3,
            },
            {
                id: 'docHolliday',
                displayName: 'Doc Holliday',
                points: 16,
                traits: ['Face', 'Legendary', 'Lawmen', 'Outlaws', 'Tombstone', 'Mercenary', 'Agent'],
            },
            {
                id: 'furioMontoya',
                displayName: 'Furio Montoya',
                points: 13,
                traits: ['Face', 'Lawmen', 'Sherif', 'Agent'],
            },
            {
                id: 'graceMyrtle',
                displayName: 'Grace Myrtle',
                points: 12,
                traits: ['Face', 'Lawmen', 'Sherif', 'Ranger'],
            },
            {
                id: 'helenaMiller',
                displayName: 'Helena Miller',
                points: 19,
                traits: ['Boss', 'Lawmen', 'Union', 'Marshal', 'Agent'],
            },
            {
                id: 'hwkScoutAutomata',
                displayName: 'HWK Scout Automata',
                points: 4,
                traits: ['Specialist', 'Lawmen', 'Union', 'Automata', 'Hawk Simulacra'],
            },
            {
                id: 'idaSaxon',
                displayName: 'Ida Saxon',
                points: 14,
                traits: ['Face', 'Lawmen', 'Seriff', 'Agent'],
            },
            {
                id: 'ironHorseDeputies',
                displayName: 'Iron Horse Deputies',
                points: 8,
                traits: ['Support', 'Lawmen', 'Machine', 'Mounted', 'Iron Horse'],
                countMin: 2,
                countMax: 4,
            },
            {
                id: 'jedrickPowell',
                displayName: 'Jedrick Powell',
                points: 15,
                traits: ['Face', 'Lawmen', 'Sheriff', 'Agent'],
            },
            {
                id: 'jedrickPowell&2020',
                displayName: 'Jedrick Powell & 20-20',
                points: 21,
                traits: ['Face', 'Legendary', 'Lawmen', 'Automata', 'Machine', 'Sheriff', 'Agent', 'Mounted', 'Blackhoof'],
            },
            {
                id: 'k9AttackDogPack',
                displayName: 'K9 Attack Dog Pack',
                points: 2,
                traits: ['Support', 'Lawmen', 'Automata', 'K9 Simulacra'],
                countMin: 2,
                countMax: 6,
            },
            {
                id: 'k9GuardDog',
                displayName: 'K9 Guard Dog',
                points: 3,
                traits: ['Specialist', 'Lawmen', 'Automata', 'K9 Simulacra'],
            },
            {
                id: 'k9GunDogPack',
                displayName: 'K9 Gun Dog Pack',
                points: 5,
                traits: ['Support', 'Lawmen', 'Automata', 'K9 Simulacra'],
                countMin: 2,
                countMax: 4,
            },
            {
                id: 'kingsleyStern',
                displayName: 'Kingsley Stern',
                points: 17,
                traits: ['Boss', 'Lawmen', 'Judge'],
            },
            {
                id: 'MercuryJones',
                displayName: 'Mercury Jones',
                points: 13,
                traits: ['Face', 'Lawmen', 'Agent'],
            },
            {
                id: 'mickIronclad',
                displayName: 'Mick Ironclad',
                points: 10,
                traits: ['Face', 'Lawmen'],
            },
            {
                id: 'missyCopelie',
                displayName: 'Missy Copelie',
                points: 11,
                traits: ['Face', 'Lawmen', 'Outlaws', 'Ranger', 'Soiled Dove', 'Mercenary'],
            },
            {
                id: 'morganEarp',
                displayName: 'Morgan Earp',
                points: 18,
                traits: ['Boss', 'Lawmen', 'Marshal', 'Tombstone'],
            },
            {
                id: 'morganEarpLegend',
                displayName: 'Morgan Earp (Legendary)',
                points: 21,
                traits: ['Boss', 'Legendary', 'Lawmen', 'Marshal', 'Tombstone'],
            },
            {
                id: 'nateBerenger',
                displayName: 'Nate Berenger',
                points: 14,
                traits: ['Face', 'Lawmen', 'Deputy', 'Ranger'],
            },
            {
                id: 'patGarrett',
                displayName: 'Pat Garrett',
                points: 12,
                traits: ['Face', 'Lawmen', 'Union', 'Agent'],
            },
            {
                id: 'rabeccaCopelie',
                displayName: 'Rabecca Copelie',
                points: 10,
                traits: ['Face', 'Lawmen', 'Outlaws', 'Ranger', 'Soiled Dove', 'Mercenary'],
            },
            {
                id: 'rangerBlackjack',
                displayName: 'Ranger Blackjack',
                points: 10,
                traits: ['Support', 'Lawmen', 'Ranger', 'Mounted', 'Blackjack', 'Ram'],
                countMin: 2,
                countMax: 4,
            },
            {
                id: 'rangerHeavyInterceptor',
                displayName: 'Ranger Heavy Interceptor',
                points: 7,
                traits: ['Support', 'Lawmen', 'Ranger', 'Mounted', 'Interceptor'],
                countMin: 1,
                countMax: 3,
            },
        ]);
    }
}
