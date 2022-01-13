import { createReducer, on } from '@ngrx/store';
import { increase, decrease, clear, doubling, changeUpdatedAt } from '../actions/counter.actions'

export const COUNTER_KEY = 'counter';


export interface CounterState {
    count: number;
    updatedAt?: number;
    style: string;
}


export const initialState: CounterState = {
    count: 0,
    style: "Tututu"
}

export const counterReducer = createReducer(
    initialState,
    on(increase, state => ({
        ...state,
        count: state.count + 1
    })),
    on(decrease, state => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, state => ({
        ...state,
        count: 0
    })),
    on(doubling, state => ({
        ...state,
        count: state.count * 2
    })),
    on(changeUpdatedAt, (state, action) => ({
        ...state, updatedAt: action.updatedAt
    })),
    
);


// export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);



// export const countSelector = createSelector(
//     featureSelector,
//     state => state.count
// );


// export const updatedAtSelector = createSelector(
//     featureSelector,
//     state => state.updatedAt
// );

// export const colorChangeSelector = createSelector(
//     featureSelector,
//     state => state.style

// );
