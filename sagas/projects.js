import { put, call, takeEvery, all } from 'redux-saga/effects';
import { FETCH_PROJECTS, FETCH_PROJECTS_DETAILS } from "../constants";
import apiHelper from '../apiHelper'

import {
    fetchProjectsSuccess,
    fetchProjectsError,
    fetchProjectDetailsSuccess,
    fetchProjectDetailsError
} from '../actions/projectsAction';

function* fetchProjects() {
    try {
        const res = yield call(apiHelper.fetchProjects, 'facebook')
        yield put(fetchProjectsSuccess(res.data))
    } catch (error) {
        yield put(fetchProjectsError(error))
    }
}

function* fetchProjectDetails({ payload }) {
    try {
        const contributorList = yield call(apiHelper.fetchContributors, payload.contributors_url)
        yield put(fetchProjectDetailsSuccess({
            name: payload.name,
            description: payload.description,
            contributorList: contributorList.data
        }))
    } catch (error) {
        yield put(fetchProjectDetailsError(error))
    }
}

export default function* projectsSaga() {
    yield all([
        takeEvery(FETCH_PROJECTS, fetchProjects),
        takeEvery(FETCH_PROJECTS_DETAILS, fetchProjectDetails)
    ])
}
