import { Dispatch } from 'redux';
import { updateSearchTextAction,updateUsersAction,updateNoOfApiCallAction,GitUsers } from './GitUser.dux';
export const updateSearchText = async (dispatch: Dispatch, searchText: string) => {
    dispatch(updateSearchTextAction(searchText));
};
export const updateUsers = async (dispatch: Dispatch, users: Array<GitUsers>) => {
    dispatch(updateUsersAction(users));
};
export const updateNoOfApiCall = async (dispatch: Dispatch, noOfApiCall: number) => {
    dispatch(updateNoOfApiCallAction(noOfApiCall));
};