import { connect } from 'react-redux';
import { requestUsers, toggleFollowingInProgress, follow, setCurrentPage, unfollow } from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFilter, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers,  } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, '');
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize, '');
    }
    onFilterChanged = (filter) => {
        this.props.requestUsers(1, this.props.pageSize, filter.term,);;
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFilterChanged={this.onFilterChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state),
    }
};


export default compose(withAuthRedirect, connect(mapStateToProps,
    { follow, unfollow, setCurrentPage,
        toggleFollowingInProgress, requestUsers,}))
        (UsersContainer);