import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { COUNTER_KEY, CounterState, counterReducer } from './counter';

export interface State {
    [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
    [COUNTER_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
