import React,{FC} from 'react';
import {GitUsers} from '../GitUser.dux';
import UserDetail from '../UserDetail/UserDetail';
interface UserResultListProp{
   users: Array<GitUsers>
}
export const UserResultList: FC<UserResultListProp> = ({users}) => {
    const userList = users.map((user,index) =>
     <UserDetail user={user} key={index}/>
    );
  if(users.length <= 0) return <div>No User Found!</div>
  return (
    <div className="UserResultList__Container">
        <h3>User Results : </h3>
        {userList}
    </div>
  );
}
export default UserResultList;