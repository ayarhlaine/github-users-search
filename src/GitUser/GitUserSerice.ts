import {Dispatch} from 'redux';
import { updateSearchText,updateUsers } from './GitUser.dux';
import {getGitUsers } from './getGitUser';
export const updateSearchTextService = (searchText: string) =>
  async (dispatch: Dispatch) => {
    updateSearchText(dispatch,searchText);
    const git_users = await getGitUsers(searchText);
    updateUsers(dispatch,git_users);
};
