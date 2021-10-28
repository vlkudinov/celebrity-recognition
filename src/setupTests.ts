import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

jest.mock('react-redux');
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => ({
    enqueueSnackbar: jest.fn(),
  }),
}));

Enzyme.configure({ adapter: new Adapter() });
