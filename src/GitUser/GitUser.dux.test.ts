import { mockUser } from '../setupTests';
import { updateSearchTextAction,updateUsersAction,updateNoOfApiCallAction,updateUserAction,gitUserReducer,GitUserProp } from './GitUser.dux';
describe('Git User Reducer',() =>{
    const gitUserInitialState: GitUserProp = {
        searchText: "",
        noOfApiCall: 0,
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

    it('should update noOfApiCall when call updateNoOfApiCallAction',() =>{
        const updatedNoOfApiCall = 2;
        const updateNoOfApiCall = updateNoOfApiCallAction(updatedNoOfApiCall);
        const actual = gitUserReducer(gitUserInitialState,updateNoOfApiCall);
        expect(actual.noOfApiCall).toBe(updatedNoOfApiCall);
    });

    it('should update userAction when call updateUserAction',() =>{
        const userAction = 'User Action';
        const updateUserActionCall = updateUserAction(userAction);
        const actual = gitUserReducer(gitUserInitialState,updateUserActionCall);
        expect(actual.userAction).toBe(userAction);
    });
});