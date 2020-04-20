import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchInput } from './SearchInput';
describe('SearchInput', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    searchText: 'Example SearchText',
    onSearchInputChange: jest.fn(),
  };

  beforeEach(() =>{
    subject = shallow(<SearchInput {...defaultProp}/>);
  });

  it('should be div compnent',() => {
    expect(subject.type()).toBe('div');
  });

  it('should has SearchInput__Container class',() =>{
    expect(subject.hasClass('SearchInput__Container')).toBe(true);
  });

  it('should has Search text',() => {
    expect(subject.text()).toEqual('Search: ')
  });

  describe('Input Element',() =>{
    it('should has input element',() =>{
        expect(subject.find('input').length).toBe(1);
    });

    it('should has value prop', () => {
        expect(subject.find('input').prop('value')).toBe(defaultProp.searchText);
    });

    it('should call onSearchInputChange when user input change',() =>{
        subject.find('input').simulate('change',{target: {value: 'ayarhlaine'}});
        expect(defaultProp.onSearchInputChange).toHaveBeenCalledWith('ayarhlaine');
    });
  });
});