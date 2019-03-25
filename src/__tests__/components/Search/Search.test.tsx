import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Search from "../../../components/Search/Search";

configure({adapter: new Adapter()});

describe('Search Component', () => {
  let wrapper, wrapperInstance;

  beforeEach(() => {
    wrapper = shallow(<Search
      handleInputChange={() => {}}
      handleKeyDown={() => {}}
      searchTerm={''}
    />);

    wrapperInstance = wrapper.instance();
  });

  test('should check if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapperInstance.props.searchTerm).toEqual('');
  });
});
