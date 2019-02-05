import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

export const setSomething = (todo: string) => action(actionNames.SOMETHING, todo); // change this
