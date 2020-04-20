import axios from 'axios';
import { getGitUsers } from './getGitUser';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getGitUser',() =>{
    const searchText = 'Search';
    
    it('should return git users as expected',async () => {
        const git_users = [
            {
                login: 'login',
                id: 123,
                avatar_url: 'avatar url',
                url: 'url'
            }
        ];
        mockedAxios.get.mockResolvedValue({data: {items: git_users}});
        const subject = await getGitUsers(searchText);
        expect(subject).toEqual(git_users);
    });

});
