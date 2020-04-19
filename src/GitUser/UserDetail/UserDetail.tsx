import React,{FC} from 'react';
import {GitUsers} from '../GitUser.dux';
interface UserDetailProp{
   user: GitUsers
}
const UserDetail: FC<UserDetailProp> = ({user}) => {
  const {login,avatar_url,url} = user;
  return (
    <div className="UserDetail__Container">
        <div>Git User Name : {login}</div>
        <div>Home Page : {url}</div>
        <div>Image : <img src={avatar_url} style={{width: 16,height: 16}} alt={'User Profile'}/></div>
        <hr/>
    </div>
  );
}
export default UserDetail;