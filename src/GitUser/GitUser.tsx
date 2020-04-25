import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { updateSearchTextService,callGitAPIService } from './GitUserService';
import SearchInput from './SearchInput/SearchInput';
import UserResultList from './UserResultList/UserResultList';
import { GitUsers } from './GitUser.dux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import AppHeader from './AppHeader/AppHeader';
import SocialLink from './SocialLink/SocialLink';
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
export const GitUser: FC<GitUserPropNULL> = ({ searchText, users, noOfApiCall, actions }) => {
  const [input$] = useState(() => new Subject<string>());
  useEffect(() => {
    const subscription = input$.pipe(
      debounceTime(1000)
    ).subscribe((newValue: string) => actions.callGitAPIService(newValue));
    return () => {
      subscription.unsubscribe();
    };
  }, [input$,actions]);
  const onInputChange = (searchText: string) => {
    actions.updateSearchTextService(searchText);
    input$.next(searchText);
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