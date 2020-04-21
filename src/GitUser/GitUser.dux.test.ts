import { mockUser } from '../setupTests';
import { updateSearchTextAction,updateUsersAction,gitUserReducer,GitUserProp } from './GitUser.dux';
describe('Git User Reducer',() =>{
    const gitUserInitialState: GitUserProp = {
        searchText: "",
        users: []
    };

    it('should update searchText when call updateSearchTextAction',() =>{
        const newSearchText = 'New Search Text';
        const searchTextAcion = updateSearchTextAction(newSearchText);
        const actual = gitUserReducer(gitUserInitialState,searchTextAcion);
        expect(actual.searchText).toBe(newSearchText);
    });

    it('should update users when call updateUsersAction',() =>{
        const newUsers = [
            mockUser
        ];
        const userAction = updateUsersAction(newUsers);
        const actual = gitUserReducer(gitUserInitialState,userAction);
        expect(actual.users).toBe(newUsers);
    });
});