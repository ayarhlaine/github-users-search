import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

export default Enzyme;


export const getDispatchMock = () => jest.fn().mockImplementation((dispatched) => dispatched);
