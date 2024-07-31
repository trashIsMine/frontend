import React from "react";
import styled from "styled-components";

interface WrapperProps {
    children: React.ReactNode
}

interface StyleDivProps {
    borderColor: string
}

const StyleDiv = styled.div<StyleDivProps>`
    border: 2px solid ${props => props.borderColor};
    padding: 16px;
    margin: 20px auto;
    width: 600px;
    height: 400px;
`

const Wrapper = ({children}: WrapperProps) => {
    return (
        <StyleDiv borderColor="black">
            {children}
        </StyleDiv>
    );
}

export default Wrapper;