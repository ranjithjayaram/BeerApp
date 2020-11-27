import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BeerCard from './BeerCard';

describe('BeerCard', () => {
  let props;
  let shallowBeerCard;
  let renderedBeerCard;
  let mountedBeerCard;

  const shallowTestComponent = () => {
    if (!shallowBeerCard) {
      shallowBeerCard = shallow(<BeerCard {...props} />);
    }
    return shallowBeerCard;
  };

  const renderTestComponent = () => {
    if (!renderedBeerCard) {
      renderedBeerCard = render(<BeerCard {...props} />);
    }
    return renderedBeerCard;
  };

  const mountTestComponent = () => {
    if (!mountedBeerCard) {
      mountedBeerCard = mount(<BeerCard {...props} />);
    }
    return mountedBeerCard;
  };  

  beforeEach(() => {
    props = {};
    shallowBeerCard = undefined;
    renderedBeerCard = undefined;
    mountedBeerCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
