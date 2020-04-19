import React,{FC} from 'react';
interface AppProp{

}
const App: FC<AppProp> = ({}) => {
  return (
    <div className="App">
      Search: <input type="text" />
    </div>
  );
}

export default App;