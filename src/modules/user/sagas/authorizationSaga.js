import {takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { signInUser, signInUserSuccess, signInUserError } from '../actions';
import { signIn } from '../../../api';

export  function* authSaga({payload}) {
 
    try {
      const result = yield call(signIn,payload);
      yield put(signInUserSuccess(result));
    } catch (err) {
      yield put(signInUserError(err));
    }
  
}
export default function* watchSignIn () {
  yield takeEvery(signInUser, authSaga)
}