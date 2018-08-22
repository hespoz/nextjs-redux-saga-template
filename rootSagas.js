import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import projectsSaga from './sagas/projects';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
    yield all([
        projectsSaga()
    ]);
}
