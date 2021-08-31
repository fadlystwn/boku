import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, waitFor} from '@testing-library/react'
import {Books} from '../../api-data';
import Book from './Book';

test('should render correctly', () => {
    const{debug} = render(<Book data={Books}/>)
    const bookshelf = screen.getAllByTestId('books')
    expect(bookshelf).toBeTruthy()
    debug()
})

test('should render empty component', () => {
    render(<Book data={[]}/>)
    const noBooks = () => screen.findByTestId('no-books')
    const emptyText = screen.getByText('Empty..')
    expect(noBooks).toBeTruthy()
    expect(emptyText).toBeInTheDocument()
})
