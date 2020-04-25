import { updateSearchTextService } from './GitUserService';
import { updateSearchText,updateUsers } from './GitUser.dispatch';
import { getGitUsers } from './getGitUser';
import { getDispatchMock } from '../setupTests';
jest.mock('./getGitUser');
jest.mock('./GitUser.dispatch');
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
});
