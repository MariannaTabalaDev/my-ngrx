import { COUNTER_KEY } from '../reducers/counter.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducers';

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);

export const countSelector = createSelector(
    featureSelector,
    state => state.count
);

export const updatedAtSelector = createSelector(
    featureSelector,
    state => state.updatedAt
);
export const colorChangeSelector = createSelector(
    featureSelector,
    state => state.style

);
