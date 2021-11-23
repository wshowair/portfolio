import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
`

const Home = (): JSX.Element => {
  return <Main id='main'>Homepage works</Main>
}

export default Home
