import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { updateSearchTextService,callGitAPIService } from './GitUserService';
import SearchInput from './SearchInput/SearchInput';
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
  actions: {
    updateSearchTextService: typeof updateSearchTextService
    callGitAPIService: typeof callGitAPIService
  }
}
type GitUserPropNULL = GitUserProp | null;
const subject = new Subject<string>();
export const GitUser: FC<GitUserPropNULL> = ({ searchText, users, noOfApiCall, actions }) => {
  useSubject(subject,actions.callGitAPIService);
  const onInputChange = (searchText: string) => {
    actions.updateSearchTextService(searchText);
    subject.next(searchText);
  }
  return (
    <div className="Git__User__Container" style={{padding: '1rem'}}>
      <AppHeader />
      <SearchInput
        searchText={searchText}
        onSearchInputChange={onInputChange}
      />
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
  const { searchText, users, noOfApiCall } = git_user;
  return { searchText, users, noOfApiCall }
};
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators({ updateSearchTextService }, dispatch),
    ...bindActionCreators({ callGitAPIService }, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(GitUser);