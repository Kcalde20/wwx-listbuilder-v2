import { Injectable, signal } from '@angular/core';
import { iList } from './list.service';

@Injectable({
    providedIn: 'root',
})
export class ListsService {
    myLists = signal<iList[]>([]);

    constructor() {
        this.myLists.set([
            {
                name: 'My List',
                faction: 'Lawmen',
                pointLimit: 150,
                posses: [],
            },
        ]);
    }
}
