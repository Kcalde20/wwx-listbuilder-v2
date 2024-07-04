import { Component, input, inject, computed, output } from '@angular/core';
import { UnitService } from '../../shared/unit.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-unit-card',
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
    providers: [UnitService],
    templateUrl: './unit-card.component.html',
    styleUrl: './unit-card.component.scss',
})
export class UnitCardComponent {
    unit = input.required<any>();

    onRemoveUnit = output<string>();
    onIncreaseUnitCount = output<string>();
    onDecreaseUnitCount = output<string>();

    unitService = inject(UnitService);

    unitInfo = computed(() => {
        let targetUnit = this.unitService.getUnitById(this.unit().id);
        return {
            displayName: targetUnit?.displayName,
            points: targetUnit?.points,
            traits: targetUnit?.traits,
            countMin: targetUnit?.countMin,
            countMax: targetUnit?.countMax,
        };
    });

    removeUnit() {
        this.onRemoveUnit.emit('delete unit');
    }

    increaseCount() {
        this.onIncreaseUnitCount.emit('increase unit count');
    }

    decreaseCount() {
        this.onDecreaseUnitCount.emit('decrease unit count');
    }
}
