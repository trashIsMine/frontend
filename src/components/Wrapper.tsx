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
    width: 1000px;
`

const Wrapper = ({children}: WrapperProps) => {
    return(
        <StyleDiv borderColor="black">
            {children}
        </StyleDiv>
        // <div>
        //
        // </div>
    );
}

export default Wrapper