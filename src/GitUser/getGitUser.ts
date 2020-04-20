import axios from 'axios';
import { GitUsers } from './GitUser.dux';
interface GitHubResponse {
    total_count: number,
    items: Array<GitUsers>
}
export const getGitUsers = async (searchText: string): Promise<Array<GitUsers>> =>{
    const response = await axios.get<GitHubResponse>(`https://api.github.com/search/users?q=${searchText}`);
    const responseData:GitHubResponse = response.data;
    if(responseData) return responseData.items;
    return [];
}