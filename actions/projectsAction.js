import {
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_ERROR,
    FETCH_PROJECTS_DETAILS,
    FETCH_PROJECTS_DETAILS_SUCCESS,
    FETCH_PROJECTS_DETAILS_ERROR
} from '../constants'

export const fetchProjects = () => ({
    type:FETCH_PROJECTS
})

export const fetchProjectsSuccess = (data) => ({
    type:FETCH_PROJECTS_SUCCESS,
    payload: data
})

export const fetchProjectsError = (data) => ({
    type:FETCH_PROJECTS_ERROR,
    payload: data
})


export const fetchProjectDetails = (data) => ({
    type:FETCH_PROJECTS_DETAILS,
    payload: data
})

export const fetchProjectDetailsSuccess = (data) => ({
    type:FETCH_PROJECTS_DETAILS_SUCCESS,
    payload: data
})

export const fetchProjectDetailsError = (data) => ({
    type:FETCH_PROJECTS_DETAILS_ERROR,
    payload: data
})