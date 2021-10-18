import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                 title= "Model S"
                 description= "Order Online for Touchless Delivery"
                 img= "model-s.jpg"
                 leftBtnTxt = "customer order"
                rightBtnTxt= "existing inventory"
            />
            <Section 
                 title= "Model X"
                 description= "Order Online for Touchless Delivery"
                 img= "model-x.jpg"
                 leftBtnTxt = "customer order"
                rightBtnTxt= "existing inventory"
            />
            <Section 
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                img= "model-3.jpg"
                leftBtnTxt = "customer order"
                rightBtnTxt= "existing inventory"
            />
            <Section 
                title= "Model Y"
                description= "Order Online for Touchless Delivery"
                img= "model-y.jpg"
                leftBtnTxt = "customer order"
                rightBtnTxt= "existing inventory"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
