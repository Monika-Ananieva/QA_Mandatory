import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Votes from './Votes';

it('runs vote function on button click', () => {
    const testAddVoteFunction = jest.fn();

    const component = <Votes addVote={testAddVoteFunction}/>
    const {getByTestId} = render(component);
    fireEvent.click(getByTestId('votes-button'));
    expect(testAddVoteFunction).toHaveBeenCalled();
});