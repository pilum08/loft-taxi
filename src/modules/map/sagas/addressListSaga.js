import { takeEvery,takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getAddresses } from '../../../api';

export  function* addressSaga() {
 
    try {
      const result = yield call(getAddresses);
      yield put(actions.loadAddressesMapSuccess(result));
    } catch (err) {
      yield put(actions.loadAddressesMapError(err));
    }
}
export default function* watchAddresses() {
  yield takeLatest(actions.loadAddressesMap, addressSaga) }