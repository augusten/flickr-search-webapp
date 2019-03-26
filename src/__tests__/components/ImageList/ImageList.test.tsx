import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ImageList from "../../../components/ImageList/ImageList";

configure({adapter: new Adapter()});
jest.disableAutomock();

describe('ImageList Component', () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<ImageList
    //   list={[]}
    // />);
  });

  test('should check if the component exists', () => {
    // expect(wrapper.exists()).toBe(true);
  });
});
