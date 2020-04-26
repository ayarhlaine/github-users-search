import { updateSearchTextService,callGitAPIService } from './GitUserService';
import { updateSearchText,updateUsers,updateNoOfApiCall } from './GitUser.dispatch';
import { getGitUsers } from './getGitUser';
import { getDispatchMock,mockUser } from '../setupTests';
import { AppState } from '../store';
jest.mock('./getGitUser');
jest.mock('./GitUser.dispatch');
describe('Git Users Service', () => {
  const searchText = 'Search';
  const mockNoOfApiCall = 2;
  let dispatchMock: jest.Mock;
  let getState: () => AppState;
  beforeEach(() => {
    dispatchMock = getDispatchMock();
    getState = jest.fn().mockReturnValue({
      git_user: {noOfApiCall: mockNoOfApiCall}
    });
    (getGitUsers as jest.Mock).mockReturnValue([mockUser])
    updateSearchTextService(searchText)(dispatchMock);
    callGitAPIService(searchText)(dispatchMock,getState);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call updateSearchText',() =>{
    expect(updateSearchText).toHaveBeenCalledWith(dispatchMock,searchText);
  });

  it('should call update user with mockuser array',() => {
    expect(updateUsers).toHaveBeenCalledWith(dispatchMock,[mockUser]);
  });

  it('should call updateNoOfApiCall with mockNoOfApiCall + 1',() =>{
    expect(updateNoOfApiCall).toHaveBeenCalledWith(dispatchMock,mockNoOfApiCall+1);
  });

});
