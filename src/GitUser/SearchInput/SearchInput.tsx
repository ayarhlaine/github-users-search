import React,{FC} from 'react';
interface SearchInputProp{
    searchText: string,
    onSearchInputChange: (searchText: string) => void,
}
export const SearchInput: FC<SearchInputProp> = ({searchText,onSearchInputChange}) => {
  return (
    <div className="SearchInput__Container">
      Search: <input type="text" value={searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearchInputChange(event.target.value as string)}/>
    </div>
  );
}
export default SearchInput;