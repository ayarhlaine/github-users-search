import React,{FC} from 'react';
import './SearchInput.css';
interface SearchInputProp{
    searchText: string,
    onSearchInputChange: (searchText: string) => void,
}
export const SearchInput: FC<SearchInputProp> = ({searchText,onSearchInputChange}) => {
  return (
    <div className="SearchInput__Container">
      <input className={'SearchInput'} type="text" placeholder={' Type github user name'} value={searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearchInputChange(event.target.value as string)}/>
    </div>
  );
}
export default SearchInput;