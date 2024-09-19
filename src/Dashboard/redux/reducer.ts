import { mediaType } from '../../common/store/types';
import { createReducer, resetState } from '../../common/store/typeSafe';
import {
  resetAction,
  storeMediaAction,
  storeMediaActionType
} from './actions';

const initialState = {
  media: []
};

export interface dashboardReducerStateType {
  media: mediaType[];
}

export const dashboardReducer = createReducer(initialState)
  .handleAction(
    storeMediaAction,
    (
      state: dashboardReducerStateType,
      action: { payload: storeMediaActionType }
    ) => {
      state.media = action.payload.media
    }
  )
  .handleAction(resetAction, resetState(initialState));
