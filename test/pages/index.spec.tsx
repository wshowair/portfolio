import React from 'react'
import { render, screen } from '@test/utils'
import Home from '@pages/index'

describe('Home page', () => {
  it('renders', () => {
    render(<Home />)
    expect(screen.queryByText('Homepage works')).toBeInTheDocument()
  })
})
