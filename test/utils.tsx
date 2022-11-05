import React, { ReactElement } from 'react'

import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'

const Providers = ({ children }) => {
  return <>{children}</>
}

// type CustomRenderOptions = Omit<RenderOptions, 'queries'>
type CustomRender = (ui: ReactElement, options?: RenderOptions) => RenderResult
const customRender: CustomRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
