import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FlickrImage from "../../../components/FlickrImage/FlickrImage";

configure({adapter: new Adapter()});

describe('FlickrImage Component', () => {
  let wrapper, wrapperInstance;

  beforeEach(() => {
    wrapper = shallow(<FlickrImage
      key={'key'}
      id={'id'}
      farmId={'farmId'}
      serverId={'serverId'}
      secret={'secret'}
    />);

    wrapperInstance = wrapper.instance();
  });

  test('should check if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapperInstance.props.farmId).toEqual('farmId');
    expect(wrapperInstance.props.serverId).toEqual('serverId');
    expect(wrapperInstance.props.secret).toEqual('secret');
    expect(wrapperInstance.props.id).toEqual('id');
  });
});
