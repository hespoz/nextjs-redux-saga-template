import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Page extends Component {
    static async getInitialProps({query}) {

        console.log("It is executed anytime the page is loaded or redirected", query)


        return query;
    }

    render() {
        return (
            <div>
                <div>Page {this.props.custom}</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Page);