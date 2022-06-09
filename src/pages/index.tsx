import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center
  align-items: center
`

const Title = styled.h1`
  color: #000000;

`

const index = () => {
  return (
    <Container>
      <Title>Sebastian Perez</Title>
    </Container>
  )
}

export default index