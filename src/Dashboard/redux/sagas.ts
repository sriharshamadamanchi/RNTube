import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getActionType } from '../../common/store/typeSafe';
import {
  hideLoaderAction,
  showLoaderAction
} from '../../common/loaderRedux/actions';
import { Alert } from 'react-native';
import { fetchMediaAPI } from './apis';
import { fetchMediaAction, storeMediaAction } from './actions';
import { mediaType } from '../../common/store/types';

export function* fetchMediaSaga(): any {
  try {
    yield put(showLoaderAction());
    const response = yield call(fetchMediaAPI);
    console.log(response)
    // const mappedThumbnails = response.map((media: mediaType) => {
    //   return call(createThumbnail, {url: media.urls.mp4, timeStamp: 10000})
    // })
    // const thumbnails = yield all(mappedThumbnails)
    // console.log("thumbnails", thumbnails)
    yield put(
      storeMediaAction({
        media: response ?? [],
      })
    );
  } catch (error: any) {
    console.log('error in fetchMediaSaga', error);
    if (error.message) {
      Alert.alert('Error', error.message);
    }
  } finally {
    yield put(hideLoaderAction());
  }
}

export const dashboardSagas = [
  takeLatest(getActionType(fetchMediaAction), fetchMediaSaga),
];
