import { Dispatch } from 'redux';
import { updateSearchText,updateUsers,updateNoOfApiCall } from './GitUser.dispatch';
import { AppState } from '../store';
import { getGitUsers } from './getGitUser';
export const updateSearchTextService = (searchText: string) =>
  async (dispatch: Dispatch) => {
    updateSearchText(dispatch,searchText);
};
export const callGitAPIService = (searchText: string) =>
  async (dispatch: Dispatch, getState: () => AppState) => {
    const { git_user } = getState();
    const { noOfApiCall } = git_user;
    const git_users = await getGitUsers(searchText);
    updateUsers(dispatch,git_users);
    updateNoOfApiCall(dispatch,noOfApiCall+1);
};