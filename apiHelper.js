import axios from 'axios';

const apiHelper = {
    fetchProjects: (orgName) => {
        return axios.get(`https://api.github.com/orgs/${orgName}/repos`)
    },
    fetchContributors: (url) => {
        return axios.get(url)
    }
}

export default apiHelper