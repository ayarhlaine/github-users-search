import { updateSearchTextService } from './GitUserService';
import { updateSearchText,updateUsers } from './GitUser.dux';
import { getGitUsers } from './getGitUser';
import { getDispatchMock } from '../setupTests';
jest.mock('./getGitUser');
jest.mock('./GitUser.dux');
describe('Git Users Service', () => {
  const searchText = 'Search';
  let dispatchMock: jest.Mock;
  const git_users = [
    {
        login: 'login',
        id: 123,
        avatar_url: 'avatar url',
        url: 'url'
    }
];
  beforeEach(() => {
    dispatchMock = getDispatchMock();
    (getGitUsers as jest.Mock).mockReturnValue(git_users);
    updateSearchTextService(searchText)(dispatchMock);
  });

  it('should call updateSearchText',() =>{
    expect(updateSearchText).toHaveBeenCalledWith(dispatchMock,searchText);
  });

  it('should call updateUsers',() =>{
    expect(updateUsers).toHaveBeenCalledWith(dispatchMock,git_users);
  });
});
