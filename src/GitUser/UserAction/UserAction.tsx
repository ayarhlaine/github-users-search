import React,{FC} from 'react';
import './UserAction.css';
interface UserActionProp {
    userAction: string | undefined;
}
export const UserAction: FC<UserActionProp> = ({userAction}) => {
  return (
    <div className="UserAction__Container">
        <p className={'UserAction__Text'}>{userAction}</p>
    </div>
  );
}
export default UserAction;