import React,{FC} from 'react';
import './UserAction.css';
interface UserActionProp {
    userAction: string | undefined;
}
export const UserAction: FC<UserActionProp> = ({userAction}) => {
  return (
    <p className={'UserAction__Text'}>{userAction}</p>
  );
}
export default UserAction;