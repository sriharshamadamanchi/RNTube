import { mediaType } from '../../common/store/types';
import { action } from '../../common/store/typeSafe';

export const fetchMediaAction = () =>
  action('src/Dashboard/redux/fetchMediaAction');

export type storeMediaActionType = {
  media: mediaType[]
}

export const storeMediaAction = (payload: storeMediaActionType) =>
  action('src/Dashboard/redux/storeMediaAction', payload);

export const resetAction = (): any => action('src/Dashboard/redux/resetAction');
