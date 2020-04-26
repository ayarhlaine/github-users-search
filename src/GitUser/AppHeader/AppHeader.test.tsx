import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {AppHeader } from './AppHeader';
describe('App Header Component', () => {
    let subject: ShallowWrapper;
    beforeEach(() =>{
        subject = shallow(<AppHeader />);
    });

    it('should be div component',() =>{
        expect(subject.type()).toBe('div');
    });

    it('should has App__Header__Container class',() =>{
        expect(subject.hasClass('App__Header__Container')).toBe(true);
    });

    describe('Title of App', () => {
        it('should has h3 tag',() =>{
            expect(subject.childAt(0).type()).toBe('h3');
        });
        it('should has text Sample Github Api Call (React,Redux,RXJS)',() =>{
            expect(subject.childAt(0).text()).toBe('Sample Github Api Call (React,Redux,RXJS)');
        });
    });
    
});
