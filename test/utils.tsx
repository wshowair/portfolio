import React, { ReactElement } from 'react'

import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles'

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

// type CustomRenderOptions = Omit<RenderOptions, 'queries'>
type CustomRender = (ui: ReactElement, options?: RenderOptions) => RenderResult
const customRender: CustomRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
