import React,{FC} from 'react';
import './SocialLink.css';
export const SocialLink: FC<{}> = () => {
  return (
    <div className="SocialLink__Container">
      <h3>Made By: <a href={'https://facebook.com/developerayarhlaine'}>Ayar Hlaine</a></h3>
    </div>
  );
}
export default SocialLink;