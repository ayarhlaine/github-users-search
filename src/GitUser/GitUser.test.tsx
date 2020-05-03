import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppHeader from './AppHeader/AppHeader';
import SearchInput from './SearchInput/SearchInput';
import UserAction from './UserAction/UserAction';
import UserResultList from './UserResultList/UserResultList';
import { GitUser } from './GitUser';
describe('Git User', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    searchText: 'Example SearchText',
    noOfApiCall: 0,
    userAction: 'User Action',
    users: [
        {
            login: 'Example Login',
            id: 123,
            avatar_url: 'avatar url',
            url: 'url'
        }
    ],
    actions: {
        updateSearchTextService: jest.fn(),
        callGitAPIService: jest.fn(),
        updateUserActionService: jest.fn()
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

  describe('AppHeader component',() =>{
    it('should be AppHeader component',() =>{
      expect(subject.childAt(0).type()).toBe(AppHeader);
    });
  });
  
  describe('SearchInput component',() =>{
    it('should has SearchInput',() =>{
      expect(subject.childAt(1).type()).toBe(SearchInput);
    });

    it('should has searchText prop',() =>{
        expect(subject.childAt(1).prop('searchText')).toBe(defaultProp.searchText);
    });
  });
  describe('UserAction component',() =>{
    it('should has UserAction',() =>{
      expect(subject.childAt(2).type()).toBe(UserAction);
    });

    it('should has userAction prop',() =>{
        expect(subject.childAt(2).prop('userAction')).toBe(defaultProp.userAction);
    });
  });

  describe('UserResultList component',() =>{
    it('should has UserResultList',() =>{
        expect(subject.childAt(3).type()).toBe(UserResultList);
    });

    it('should has users prop',() =>{
        expect(subject.childAt(3).prop('users')).toBe(defaultProp.users);
    });
  });

});