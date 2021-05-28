import {Action} from '@ngrx/store';

// tslint:disable-next-line:interface-name
export interface ActionWithPayload<T> extends Action {
  payload?: T;
}
