import { Dispatch } from 'redux';
import { updateSearchTextAction,updateUsersAction,updateNoOfApiCallAction,updateUserAction,GitUsers } from './GitUser.dux';
export const updateSearchText = async (dispatch: Dispatch, searchText: string) => {
    dispatch(updateSearchTextAction(searchText));
};
export const updateUsers = async (dispatch: Dispatch, users: Array<GitUsers>) => {
    dispatch(updateUsersAction(users));
};
export const updateNoOfApiCall = async (dispatch: Dispatch, noOfApiCall: number) => {
    dispatch(updateNoOfApiCallAction(noOfApiCall));
};
export const userActionCall = async (dispatch: Dispatch, userAction: string) => {
    dispatch(updateUserAction(userAction));
};