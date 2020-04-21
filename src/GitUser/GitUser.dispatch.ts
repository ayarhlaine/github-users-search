import { Dispatch } from 'redux';
import { updateSearchTextAction,updateUsersAction,GitUsers } from './GitUser.dux';
export const updateSearchText = async (dispatch: Dispatch, searchText: string) => {
    dispatch(updateSearchTextAction(searchText));
};
export const updateUsers = async (dispatch: Dispatch, users: Array<GitUsers>) => {
    dispatch(updateUsersAction(users));
};