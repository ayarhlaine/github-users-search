import { action,createReducer, createAction } from 'typesafe-actions';


export const updateSearchTextAction = (searchText: string) => action('GIT_USER/CHANGE_SEARCH_TEXT', {searchText});

export interface GitUserProp {
    searchText: string
}
const initialState: GitUserProp = {
    searchText: ""
};
export const gitUserReducer = createReducer(initialState)
  .handleAction('todos/ADD', (state: GitUserProp, action:any) =>
    ({ ...state, searchText: action.payload }))
  ;
