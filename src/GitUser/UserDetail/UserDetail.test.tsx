import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserDetail } from './UserDetail';
describe('User Detail', () => {
  let subject: ShallowWrapper;
  const defaultProp = {
    user: {
        login: 'Test Login',
        id: 123,
        avatar_url: 'Test URL',
        url: 'test url',
    }
  };

  beforeEach(() =>{
    subject = shallow(<UserDetail {...defaultProp}/>);
  });

  it('should be div component', () =>{
    expect(subject.type()).toBe('div');
  });

  it('should has UserDetail__Container class',() => {
    expect(subject.hasClass('UserDetail__Container')).toBe(true);
  });

  it('should has Git User Name', () =>{
    const expected = `Git User Name : ${defaultProp.user.login}`;
    expect(subject.childAt(0).text()).toBe(expected);
  });

  it('should has Home Page', () =>{
    const expected = `Home Page : ${defaultProp.user.url}`;
    expect(subject.childAt(1).text()).toBe(expected);
  });

  it('should has user image',() => {
    expect(subject.find('img').prop('src')).toBe(defaultProp.user.avatar_url);
  });

});