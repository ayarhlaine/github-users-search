import { updateSearchText,updateUsers } from './GitUser.dispatch';
import { updateSearchTextAction,updateUsersAction } from './GitUser.dux';
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
});