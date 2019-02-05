import { ActionType } from 'typesafe-actions';
import * as actionCreators from './actionCreators';

export type Actions = ActionType<typeof actionCreators>;