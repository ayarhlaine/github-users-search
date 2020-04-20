import React,{FC} from 'react';
import {connect} from 'react-redux';
import { updateSearchTextService } from './GitUserService';
import { bindActionCreators, Dispatch } from 'redux';
import SearchInput from './SearchInput/SearchInput';
import UserResultList from './UserResultList/UserResultList';
import { GitUsers } from './GitUser.dux';
interface GitUserProp{
    searchText: string,
    users: Array<GitUsers>,
    actions: {
        updateSearchTextService: typeof updateSearchTextService
    }
}
type GitUserPropNULL = GitUserProp | null;
const GitUser: FC<GitUserPropNULL> = ({searchText,users,actions}) => {
  return (
    <div className="Git__User__Container">
      <SearchInput 
      searchText={searchText}
      onSearchInputChange={actions.updateSearchTextService}
      />
      <UserResultList users={users}/>
    </div>
  );
}
export const mapStateToProps = ({
    git_user
  }: {
    git_user: GitUserProp;
  }) => {
    const {searchText,users} = git_user;
    return {searchText,users}
  };
export const mapDispatchToProps = (dispatch: Dispatch) => ({
actions: {
    ...bindActionCreators({ updateSearchTextService }, dispatch),
},
});
export default connect(mapStateToProps,mapDispatchToProps)(GitUser);