import { Component, Input, inject, signal } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-list-header',
    standalone: true,
    imports: [NgClass, RouterLink],
    templateUrl: './list-header.component.html',
    styleUrl: './list-header.component.scss',
})
export class ListHeaderComponent {
    @Input() title = "Kevin's WWX-Listbuilder";
    @Input() backRoute = '/';

    listService = inject(ListService);

    listIndex = this.listService.currentListIndex();
}
