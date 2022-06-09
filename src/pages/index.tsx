import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`



const index = () => {
  return (
    <Container>
      <h1>Sebastian Perez</h1>
      <h3> hi, i'm mobile developer, so do not surprise for this website</h3>
    </Container>
  )
}

export default index