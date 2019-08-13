import { takeEvery, put, all, delay } from 'redux-saga/effects'

function* add(){
    yield delay(1000);
    yield put({ type: "INCREMENT" });
}



function* fetchActions() {
    yield takeEvery('INCREMENT_ASYNC', add);
}


export default function* rootSaga() {
    yield all([fetchActions()])
}