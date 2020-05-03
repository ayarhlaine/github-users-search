import { action,createReducer } from 'typesafe-actions';

export const updateSearchTextAction = (searchText: string) => action('GIT_USER/CHANGE_SEARCH_TEXT', searchText);
export const updateUsersAction = (users: Array<GitUsers>) => action('GIT_USER/UPDATE_USERS', users);
export const updateNoOfApiCallAction = (noOfApiCall: number) => action('GIT_USER/UPDATE_NO_OF_API_CALL', noOfApiCall);
export const updateUserAction = (userAction: string) => action('GIT_USER/UPDATE_USER_ACTION', userAction);
export interface GitUsers{
    login: string,
    id: number,
    avatar_url: string,
    url: string,
}
export interface GitUserProp {
    searchText: string,
    users: Array<GitUsers>,
    noOfApiCall: number,
    userAction?: string,
}
const initialState: GitUserProp = {
    searchText: "",
    users: [],
    noOfApiCall: 0
};
export const gitUserReducer = createReducer(initialState)
  .handleAction('GIT_USER/CHANGE_SEARCH_TEXT', (state: GitUserProp, action:any) =>
    ({ ...state, searchText: action.payload }))
  .handleAction('GIT_USER/UPDATE_USERS', (state: GitUserProp, action:any) =>
    ({ ...state, users: action.payload }))
  .handleAction('GIT_USER/UPDATE_NO_OF_API_CALL', (state: GitUserProp, action:any) =>
    ({ ...state, noOfApiCall: action.payload }))
  .handleAction('GIT_USER/UPDATE_USER_ACTION', (state: GitUserProp, action:any) =>
    ({ ...state, userAction: action.payload }))
  ;