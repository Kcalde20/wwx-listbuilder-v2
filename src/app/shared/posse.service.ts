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
                description: 'This is the most flexible and commonly deployed Posse found in the Lawmen. The broad range of Units available makes this an essential component of any force.',
                composition: ['you must include one boss unit with the LAWMEN trait.', 'you may include up to a further four units with the LAWMEN trait.'],
                limitation: ['You may not include more than one of any unit.'],
                bonus: ['none'],
            },
            {
                id: 'armouredJusticePosse',
                displayName: 'Armoured Justice Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Morgan Earp as the Posse Boss.', 'You must include two units with both the Lawmen and Automata traits.', 'You may include a unit with the Lawmen trait.', 'You may include up to a further two units with the Lawmen and Automata traits.'],
                limitation: ['You may not include more than two units with the K9 Simulacra trait.'],
                bonus: ['At the start of each round, you may remove the Disorder Condition from any units in the posse with the Automata trait within 10 inches of the posse boss.'],
            },
            {
                id: 'deadOrAlivePosse',
                displayName: 'Dead Or Alive Posse',
                description: 'This posse may be included in a Lawmen, Hex or Outlaw force.',
                composition: ['You must include Lilith Hart as the posse boss.', 'You must include five of the following: Broad Arrow Jack, Jim Peterson, Longtree, The "Masked Marshal" Jim McClain, Thomas Tate Tobin, and Yann "The Wraith" Packer.', 'You may include five of the following: Broad Arrow Jack, Jim Peterson, Longtree, The "Masked Marshal" Jim McClain, Thomas Tate Tobin, and Yann "The Wraith" Packer.'],
                limitation: ['none'],
                bonus: ['Before the Adventure begins, nominate an enemy Posse or Detachment. Once per Round, for the duration of their Activation, each Unit in this Posse may gain a point of Fortune while within 10" of any enemy Unit from that nominated Posse or Detachment. '],
            },
            {
                id: 'deadlySevenPosse',
                displayName: 'Deadly Seven Posse',
                description: 'This posse may be included in a Lawmen, Enlightened, Hex or Outlaw Force.',
                composition: ['You must include Earle Shepherd as the posse boss.', 'You must include Brutus', 'You must include a further unit with the Deadly Seven trait.', 'You may include up to a further five units with the Deadly Seven trait.'],
                limitation: ['none'],
                bonus: ['Units in this posse may choose to count the guts bonus provided by a single Adventure Card played during their activation as being +1 Limit instead of the actual bonus printed on the card.'],
            },
            {
                id: 'infernalInvestigationsPosse',
                displayName: 'Infernal Investigations Posse',
                description: 'This posse may be included in a Lawmen Force or a Union Force.',
                composition: ['You must include Helena Miller as the posse boss.', 'You must include two units with both the Lawmen and Agent trait.', 'You may include a unit with both the Agent Trait and either the Union or Lawmen traits (or all three).', 'You may include up to a further four units with both the Lawmen and Agent traits.', 'You may include up to one unit with the Union and K9 Simulacra traits.'],
                limitation: ['You may not include a Commander in the posse.'],
                bonus: ['Units in this posse gain +3 for focused action checks rather than the usual +2.'],
            },
            {
                id: 'lynchMobPosse',
                displayName: 'Lynch Mob Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Kingsly Stern as the posse boss.', 'You must include two Angry Mob units.', 'You may include up to a further six units with the Deputy trait.', 'You may include one unit with both Lawmen and Automata traits.'],
                limitation: ['none'],
                bonus: ['All Angry Mob units in the posse gain the Deputy trait. All deputy units in the posse may re-roll failed Fight and Morale Checks.'],
            },
            {
                id: 'rangerShowboatPosse',
                displayName: 'Ranger Showboat Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Wild Bill Hickok as the posse boss.', 'You must include two units with all three of the Lawmen, Face, and Ranger traits.', 'You may include one unit with both the Lawmen and Automata traits.'],
                limitation: ['You may not include more than one of any unit unless it has the Ranger and Hands units.'],
                bonus: ['When a Ranger Face unit ends its activation, if there is a Ranger unit with 5" that Unit may immediately Acivate provided it has not yet Activated this round. The Ranger unit gains +1 Limit for the Activation. This is treated as a new Activation, so you must apply any effects and draw an Action card as normal.'],
            },
            {
                id: 'regulatorsPosse',
                displayName: 'Regulators Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Billy The Kid as the posse boss.', 'You must include two units with the Regulators trait.', 'You may include up to a further four units with the Regulators trait.', 'You may include one Unit with the Outlaw and K9 Simulacra traits.'],
                limitation: ['none'],
                bonus: ['Once per Round, For the duration of its Activation, each unit may gain a point of Fortune while within 7" of a friendly Marshal or Sheriff unit.'],
            },
            {
                id: 'shieldOfTombstonePosse',
                displayName: 'Shield Of Tombstone Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Wyatt Earp as the posse boss.', 'You must include two units with the Tombstone trait.', 'You may include Morgan Earp. He replaces the Largesse rule with the Teamwork rule if you do so.', 'You may include up to a further two units with the Tombstone trait.', 'You may include one unit with both the Lawmen and Automata traits.'],
                limitation: ['none'],
                bonus: ['Units in this posse add +1 to their Limit while they are within 5" of one or more Tombstone units.'],
            },
            {
                id: 'vengeanceOfTheEarpsPosse',
                displayName: 'Vengeance Of The Earps Posse',
                description: 'This posse may be included in a Lawmen Force.',
                composition: ['You must include Martha Earp as the posse boss.', 'You must include two units with both the Lawmen and Mounted traits.', 'You may include up to a further three traits with both the Lawmen and Mounted traits.', 'You may include one unit with both the Lawmen and K9 Simulacra traits.'],
                limitation: ['none'],
                bonus: ['Units in this posse may re-roll railed Grit Checks while they are within +5" of one or units with both the Tombstone and Mounted traits.'],
            },
            {
                id: 'theWaywardEightPosse',
                displayName: 'The Warward Eight Posse',
                description: 'This posse may be included in an Enlightened, Lawmen or an Outlaw Force.',
                composition: ['You must include Marcus Wayward as the posse boss.', 'You must include seven units with the Wayward Eight trait.', 'You may include a unit with the Outlaw and Automata triats.', 'You may include a unit with the Agent trait. The unit cannot have the Tainted trait.', 'You may include a Mercenary Ironhide.'],
                limitation: ['none'],
                bonus: ['Units in this Posse may choose to count the Guts bonus provided by a single Adventure Card played during their activation as being +1 Fortune instead of the actual bonus printed on the card. The bonus lasts for the duration of their activation.'],
            },
        ]);
    }
}
