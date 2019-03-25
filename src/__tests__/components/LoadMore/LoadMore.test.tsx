import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import LoadMore from "../../../components/LoadMore/LoadMore";

configure({adapter: new Adapter()});

describe('LoadMore Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadMore
      addPage={() => {}}
    />);
  });

  test('should check if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
