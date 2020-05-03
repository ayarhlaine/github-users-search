import { updateSearchText,updateUsers,updateNoOfApiCall,userActionCall } from './GitUser.dispatch';
import { updateSearchTextAction,updateUsersAction,updateNoOfApiCallAction,updateUserAction } from './GitUser.dux';
import { getDispatchMock,mockUser } from '../setupTests';
describe('Git User Dispatch',() =>{
    let dispatchMock: jest.Mock;
    beforeEach(() => {
        dispatchMock = getDispatchMock();
    });

    it('updateSearchText should call updateSearchTextAction',() => {
        const newSearchText = 'New Search Text';
        updateSearchText(dispatchMock,newSearchText);
        expect(dispatchMock).toHaveBeenCalledWith(updateSearchTextAction(newSearchText))
    });

    it('updateUsers should call updateUsersAction',() => {
        updateUsers(dispatchMock,[mockUser]);
        expect(dispatchMock).toHaveBeenCalledWith(updateUsersAction([mockUser]))
    });

    it('updateNoOfApiCall should call updateNoOfApiCallAction',() => {
        const mockNoOfApiCall = 1;
        updateNoOfApiCall(dispatchMock,mockNoOfApiCall);
        expect(dispatchMock).toHaveBeenCalledWith(updateNoOfApiCallAction(mockNoOfApiCall))
    });

    it('userActionCall should call updateUserAction',() => {
        const userAction = 'User Action';
        userActionCall(dispatchMock,userAction);
        expect(dispatchMock).toHaveBeenCalledWith(updateUserAction(userAction))
    });
});