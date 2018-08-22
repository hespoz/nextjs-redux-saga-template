import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import { Button } from 'semantic-ui-react'

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Index extends Component {

    /*
    * Here invoke the server middleware (Our server that calls other endpoints) directly and dispatch the store
     */
    static async getInitialProps({store, isServer}) {

        await store.execSagaTasks(isServer, dispatch => {
            dispatch(fetchProjects());
        });

        console.log('');
        console.log('###############################');
        console.log('### Fetched today NASA APOD ###');
        console.log('###############################');
        console.log(store.getState().project.projectList);
        console.log('');

        return {
            projectList: store.getState().project.projectList,
            projectDetails: store.getState().project.projectDetails
        };
    }

    render() {

        console.log(this.props)
        return (
            <div>
                <div>Prop from getInitialProps {this.props.custom}</div>
                <Button>Click Here</Button>
                <Link as={'/page'} href={`/page`}>
                    <a>To Page</a>
                </Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    projectList: state.project.projectList,
    projectDetails: state.project.projectDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchProjects: fetchProjects,
    fetchProjectDetails: fetchProjectDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Index);