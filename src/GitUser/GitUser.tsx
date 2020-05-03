import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { updateSearchTextService,callGitAPIService,updateUserActionService } from './GitUserService';
import SearchInput from './SearchInput/SearchInput';
import UserAction from './UserAction/UserAction';
import UserResultList from './UserResultList/UserResultList';
import { GitUsers } from './GitUser.dux';
import { Subject } from 'rxjs';
import AppHeader from './AppHeader/AppHeader';
import SocialLink from './SocialLink/SocialLink';
import {useSubject} from './useSubject';
interface GitUserProp {
  searchText: string,
  users: Array<GitUsers>,
  noOfApiCall: number,
  userAction?: string,
  actions: {
    updateSearchTextService: typeof updateSearchTextService
    callGitAPIService: typeof callGitAPIService
    updateUserActionService: typeof updateUserActionService
  }
}
type GitUserPropNULL = GitUserProp | null;

const inputSubject$ = new Subject<string>();
export const GitUser: FC<GitUserPropNULL> = ({ searchText, users, noOfApiCall, userAction, actions }) => {
  useSubject(inputSubject$,actions.callGitAPIService,actions.updateUserActionService);
  const onInputChange = (searchText: string) => {
    actions.updateSearchTextService(searchText);
    inputSubject$.next(searchText);
  }
  return (
    <div className="Git__User__Container" style={{padding: '1rem'}}>
      <AppHeader />
      <SearchInput
        searchText={searchText}
        onSearchInputChange={onInputChange}
      />
      <UserAction userAction={userAction}/>
      <UserResultList users={users} noOfApiCall={noOfApiCall}/>
      <SocialLink/>
    </div>
  );
}
export const mapStateToProps = ({
  git_user
}: {
    git_user: GitUserProp;
  }) => {
  const { searchText, users, noOfApiCall, userAction } = git_user;
  return { searchText, users, noOfApiCall, userAction }
};
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators({ updateSearchTextService }, dispatch),
    ...bindActionCreators({ callGitAPIService }, dispatch),
    ...bindActionCreators({ updateUserActionService }, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(GitUser);