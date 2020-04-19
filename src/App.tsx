import React,{FC} from 'react';
import GitUser from './GitUser/GitUser';
interface AppProp{

}
const App: FC<AppProp> = ({}) => {
  return (
    <div className="App">
      <GitUser />
    </div>
  );
}

export default App;