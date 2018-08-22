import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Index extends Component {

    /*
    * Here invoke the server middleware (Our server that calls other endpoints) directly and dispatch the store
     */
    static async getInitialProps({store, isServer}) {

        store.dispatch(fetchProjects())

        return {staticData: 'Hello world!'};
    }

    render() {

        console.log(this.props.projectList)
        return (
            <div>
                <div>Prop from getInitialProps {this.props.custom}</div>
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