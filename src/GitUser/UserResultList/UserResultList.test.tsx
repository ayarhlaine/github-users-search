import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserResultList } from './UserResultList';
import UserDetail from '../UserDetail/UserDetail';
describe('User Result List', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    noOfApiCall: 2,
    users: [ 
        {
        login: 'Test Login',
        id: 123,
        avatar_url: 'Test URL',
        url: 'test url',
        }]
  };

  beforeEach(() =>{
    subject = shallow(<UserResultList {...defaultProp}/>);
  });

  it('should be div component',() =>{
    expect(subject.type()).toBe('div');
  });

  it('should has class UserResultList__Container',() =>{
    expect(subject.hasClass('UserResultList__Container')).toBe(true);
  });

  describe('Header',() =>{
    it('should User Result header',() => {
        expect(subject.childAt(0).type()).toBe('h3');
    });

    it('should User Result text',() => {
        expect(subject.childAt(0).text()).toBe(`User Results : (called api ${defaultProp.noOfApiCall} times)`);
    });
  });

  describe('User Detail', () => {
    it('should has User Detail Component',() => {
        const expectedUser = defaultProp.users[0];
        expect(subject.find(UserDetail).prop('user')).toBe(expectedUser);
    });
  })

  describe('When no user found',() =>{
    beforeEach(() =>{
      subject = shallow(<UserResultList {...defaultProp} users={[]}/>);
    });
    
    it('should be div component',() =>{
      expect(subject.type()).toBe('div');
    });

    it('should has User Result text',() =>{
      expect(subject.childAt(0).text()).toBe(`User Results : (called api ${defaultProp.noOfApiCall} times)`);
    });

    it('should has No Users! text',() =>{
      expect(subject.childAt(1).text()).toEqual('No Users!');
    });
  });
  
});