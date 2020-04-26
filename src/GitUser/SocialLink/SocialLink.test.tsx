import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SocialLink } from './SocialLink';
describe('SocialLink Component', () => {
    let subject: ShallowWrapper;
    beforeEach(() =>{
        subject = shallow(<SocialLink />);
    });

    it('should be div component',() =>{
        expect(subject.type()).toBe('div');
    });

    it('should has SocialLink__Container class',() =>{
        expect(subject.hasClass('SocialLink__Container')).toBe(true);
    });

    describe('Link of App', () => {
        it('should has h3 tag',() =>{
            expect(subject.childAt(0).type()).toBe('h3');
        });
        it('should has text Made By:',() =>{
            expect(subject.childAt(0).text()).toBe('Made By: Ayar Hlaine');
        });
    });
    
});
