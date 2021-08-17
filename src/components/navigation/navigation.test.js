import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from './Navigation';

describe('Testing Navigation menu component', () => {

    const menu = [
        { id: 'nav1', name: 'Home', link: '/'},
        { id: 'nav2', name: 'About', link: '/about'}
    ]

    test('should render correctly', () => {
        render(<Navigation menu={menu}/>)

    })
})