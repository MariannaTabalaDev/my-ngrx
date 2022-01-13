import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase, decrease, clear, doubling, } from './store/actions/counter.actions';
import { countSelector, updatedAtSelector } from './store/selectors/counter.selectors'
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


    count$ = this.store.select(countSelector);

    updatedAt$ = this.store.select(updatedAtSelector);

    cannotDecrease$ = this.count$.pipe(map(count => count <= 0));


    constructor(private store: Store) {
    }
    increase(): void {
        this.store.dispatch(increase())
    }
    decrease(): void {

        this.store.dispatch(decrease())
    }
    clear(): void {
        this.store.dispatch(clear())
    }
    doubling(): void {
        this.store.dispatch(doubling())
    }
  
}
