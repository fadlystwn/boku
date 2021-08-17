import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, waitFor} from '@testing-library/react'
import {Books} from '../../api-data';
import Book from './Book';

test('should render correctly', async() => {
    render(<Book books={Books}/>)
    const bookshelf = await waitFor( () => screen.getAllByTestId('books'))
    expect(bookshelf).toBeTruthy()
})

test('should render empty component', () => {
    render(<Book books={[]}/>)
    const noBooks = () => screen.findByTestId('no-books')
    const emptyText = screen.getByText('Empty..')
    expect(noBooks).toBeTruthy()
    expect(emptyText).toBeInTheDocument()
})
