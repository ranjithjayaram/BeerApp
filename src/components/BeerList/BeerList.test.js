import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BeerList from './BeerList';

describe('BeerList', () => {
  let props;
  let shallowBeerList;
  let renderedBeerList;
  let mountedBeerList;

  const shallowTestComponent = () => {
    if (!shallowBeerList) {
      shallowBeerList = shallow(<BeerList {...props} />);
    }
    return shallowBeerList;
  };

  const renderTestComponent = () => {
    if (!renderedBeerList) {
      renderedBeerList = render(<BeerList {...props} />);
    }
    return renderedBeerList;
  };

  const mountTestComponent = () => {
    if (!mountedBeerList) {
      mountedBeerList = mount(<BeerList {...props} />);
    }
    return mountedBeerList;
  };  

  beforeEach(() => {
    props = {};
    shallowBeerList = undefined;
    renderedBeerList = undefined;
    mountedBeerList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
