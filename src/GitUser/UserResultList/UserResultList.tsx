import React,{FC} from 'react';
import {GitUsers} from '../GitUser.dux';
import UserDetail from '../UserDetail/UserDetail';
interface UserResultListProp{
   users: Array<GitUsers>,
   noOfApiCall: number
}
export const UserResultList: FC<UserResultListProp> = ({users, noOfApiCall}) => {
    const userList = users.map((user,index) =>
     <UserDetail user={user} key={index}/>
    );
  if(users.length <= 0) return <div>
    <h3>User Results : (called api {noOfApiCall} times)</h3>
    <p>No Users!</p>
  </div>
  return (
    <div className="UserResultList__Container">
        <h3>User Results : (called api {noOfApiCall} times)</h3>
        {userList}
    </div>
  );
}
export default UserResultList;