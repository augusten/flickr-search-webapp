import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import SearchContainer from "../../../components/SearchContainer/SearchContainer";

configure({adapter: new Adapter()});

describe('Search Container Component', () => {
  let store, wrapper;
  let initialState = {
    searchTerm: '',
    list: [],
    page: 1
  };
  const mockStore = configureStore(initialState);

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<SearchContainer />, {context: store});
  });

  test('should check if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
