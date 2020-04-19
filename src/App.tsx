import React,{FC} from 'react';
import GitUser from './GitUser/GitUser';
interface AppProp{

}
export const App: FC<AppProp> = ({}) => {
  return (
    <div className="App">
      <GitUser />
    </div>
  );
}

export default App;