import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SearchInput from './SearchInput/SearchInput';
import UserResultList from './UserResultList/UserResultList';
import { GitUser } from './GitUser';
describe('Git User', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    searchText: 'Example SearchText',
    users: [
        {
            login: 'Example Login',
            id: 123,
            avatar_url: 'avatar url',
            url: 'url'
        }
    ],
    actions: {
        updateSearchTextService: jest.fn()
    }
  };

  beforeEach(() =>{
    subject = shallow(<GitUser {...defaultProp}/>);
  });

  it('should be div compnent',() => {
    expect(subject.type()).toBe('div');
  });

  it('should has Git__User__Container class',() =>{
    expect(subject.hasClass('Git__User__Container')).toBe(true);
  });

  describe('SearchInput component',() =>{
    it('should has SearchInput',() =>{
      expect(subject.childAt(0).type()).toBe(SearchInput);
    });

    it('should has searchText prop',() =>{
        expect(subject.childAt(0).prop('searchText')).toBe(defaultProp.searchText);
    });

    it('should has onSearchInputChange prop',() =>{
        expect(subject.childAt(0).prop('onSearchInputChange')).toBe(defaultProp.actions.updateSearchTextService);
    });
  });

  describe('UserResultList component',() =>{
    it('should has UserResultList',() =>{
        expect(subject.childAt(1).type()).toBe(UserResultList);
    });

    it('should has users prop',() =>{
        expect(subject.childAt(1).prop('users')).toBe(defaultProp.users);
    });
  });

});