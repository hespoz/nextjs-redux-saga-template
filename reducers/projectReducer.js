import {
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_DETAILS_SUCCESS
} from "../constants";

export default function reducer(state = {
    projectList:[],
    projectDetails: null
}, action) {
    switch (action.type) {
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                projectList:action.payload
            }
            break;
        case FETCH_PROJECTS_DETAILS_SUCCESS:
            return {
                ...state,
                projectDetails:action.payload
            }
            break;
        default:
            break;
    }

    return state
}