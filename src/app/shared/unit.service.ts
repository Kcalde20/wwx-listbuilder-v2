import { Injectable, computed, signal } from '@angular/core';

export interface iUnit {
    id: string;
    displayName: string;
    points: number;
    traits?: string[];
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
                traits: ['Face', 'Legendary', 'Outlaws', 'Lawmen', 'Hex', 'Human', 'Mercenary', 'Ranger', 'Cowboys', 'Tainted'],
            },
            {
                id: 'bosseReeves',
                displayName: 'Bass Reeves',
                points: 19,
                traits: ['Boss', 'Lawmen', 'Human', 'Marshal'],
            },
            {
                id: 'blackhoof2020',
                displayName: 'Blackhoof 20-20',
                points: 15,
                traits: ['Face', 'Lawmen', 'Automata', 'Machine', 'Agent', 'Equus Simulacra'],
            },
            {
                id: 'calamityJane',
                displayName: 'Calamity Jane',
                points: 12,
                traits: ['Face', 'Legendary', 'Outlaws', 'Human', 'Mercenary', 'Ranger'],
            },
            {
                id: 'deputizedGunslingers',
                displayName: 'Deputized Gunslingers',
                points: 2,
                traits: ['Hands', 'Lawmen', 'Human', 'Deputy'],
            },
            {
                id: 'deputizedSharpshooters',
                displayName: 'Deputized Sharpshooters',
                points: 2,
                traits: ['Hands', 'Lawmen', 'Human', 'Deputy'],
            },
            {
                id: 'deputizedSupportTeam',
                displayName: 'Deputized Support Team',
                points: 4,
                traits: ['Support', 'Lawmen', 'Human', 'Deputy', 'Fire Team'],
            },
            {
                id: 'docHolliday',
                displayName: 'Doc Holliday',
                points: 16,
                traits: ['Face', 'Legendary', 'Lawmen', 'Outlaws', 'Human', 'Tombstone', 'Mercenary', 'Agent'],
            },
            {
                id: 'furioMontoya',
                displayName: 'Furio Montoya',
                points: 13,
                traits: ['Face', 'Lawmen', 'Human', 'Sherif', 'Agent'],
            },
            {
                id: 'graceMyrtle',
                displayName: 'Grace Myrtle',
                points: 12,
                traits: ['Face', 'Lawmen', 'Human', 'Sherif', 'Ranger'],
            },
            {
                id: 'helenaMiller',
                displayName: 'Helena Miller',
                points: 19,
                traits: ['Boss', 'Lawmen', 'Union', 'Human', 'Marshal', 'Agent', 'Flight'],
            },
            {
                id: 'hwkScoutAutomata',
                displayName: 'HWK Scout Automata',
                points: 4,
                traits: ['Specialist', 'Lawmen', 'Union', 'Automata', 'Machine', 'Hawk Simulacra', 'Flight'],
            },
            {
                id: 'idaSaxon',
                displayName: 'Ida Saxon',
                points: 14,
                traits: ['Face', 'Lawmen', 'Human', 'Seriff', 'Agent'],
            },
            {
                id: 'ironHorseDeputies',
                displayName: 'Iron Horse Deputies',
                points: 8,
                traits: ['Support', 'Lawmen', 'Human', 'Machine', 'Mounted', 'Iron Horse'],
            },
            {
                id: 'jedrickPowell',
                displayName: 'Jedrick Powell',
                points: 15,
                traits: ['Face', 'Lawmen', 'Human', 'Sheriff', 'Agent'],
            },
            {
                id: 'jedrickPowell&2020',
                displayName: 'Jedrick Powell & 20-20',
                points: 21,
                traits: ['Face', 'Legendary', 'Lawmen', 'Human', 'Automata', 'Machine', 'Sheriff', 'Agent', 'Mounted', 'Blackhoof'],
            },
            {
                id: 'k9AttackDogPack',
                displayName: 'K9 Attack Dog Pack',
                points: 2,
                traits: ['Support', 'Lawmen', 'Automata', 'Machine', 'K9', 'Simulacra'],
            },
            {
                id: 'k9GuardDog',
                displayName: 'K9 Guard Dog',
                points: 3,
                traits: ['Specialist', 'Lawmen', 'Automata', 'Machine', 'K9', 'Simulacra'],
            },
            {
                id: 'k9GunDogPack',
                displayName: 'K9 Gun Dog Pack',
                points: 5,
                traits: ['Support', 'Lawmen', 'Automata', 'Machine', 'K9', 'Simulacra'],
            },
            {
                id: 'kingsleyStern',
                displayName: 'Kingsley Stern',
                points: 17,
                traits: ['Boss', 'Lawmen', 'Human', 'Judge'],
            },
            {
                id: 'MercuryJones',
                displayName: 'Mercury Jones',
                points: 13,
                traits: ['Face', 'Lawmen', 'Human', 'Agent'],
            },
            {
                id: 'mickIronclad',
                displayName: 'Mick Ironclad',
                points: 10,
                traits: ['Face', 'Lawmen', 'Human'],
            },
            {
                id: 'missyCopelie',
                displayName: 'Missy Copelie',
                points: 11,
                traits: ['Face', 'Lawmen', 'Outlaws', 'Human', 'Ranger', 'Soiled', 'Dove', 'Mercenary'],
            },
            {
                id: 'morganEarp',
                displayName: 'Morgan Earp',
                points: 18,
                traits: ['Boss', 'Lawmen', 'Human', 'Marshal', 'Tombstone'],
            },
            {
                id: 'morganEarpLegend',
                displayName: 'Morgan Earp (Legendary)',
                points: 21,
                traits: ['Boss', 'Legendary', 'Lawmen', 'Human', 'Machine', 'Marshal', 'Tombstone'],
            },
            {
                id: 'nateBerenger',
                displayName: 'Nate Berenger',
                points: 14,
                traits: ['Face', 'Lawmen', 'Human', 'Deputy', 'Ranger'],
            },
            {
                id: 'patGarrett',
                displayName: 'Pat Garrett',
                points: 12,
                traits: ['Face', 'Lawmen', 'Union', 'Human', 'Agent'],
            },
            {
                id: 'rabeccaCopelie',
                displayName: 'Rabecca Copelie',
                points: 10,
                traits: ['Face', 'Lawmen', 'Outlaws', 'Human', 'Ranger', 'Soiled', 'Dove', 'Mercenary'],
            },
            {
                id: 'rangerBlackjack',
                displayName: 'Ranger Blackjack',
                points: 10,
                traits: ['Support', 'Lawmen', 'Human', 'Machine', 'Ranger', 'Mounted', 'Blackjack', 'Ram'],
            },
            {
                id: 'rangerHeavyInterceptor',
                displayName: 'Ranger Heavy Interceptor',
                points: 7,
                traits: ['Support', 'Lawmen', 'Human', 'Machine', 'Ranger', 'Mounted', 'Interceptor'],
            },
        ]);
    }
}
