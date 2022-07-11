import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <Wrapper>
            <Title>Hi</Title>
        </Wrapper>
    );
}

export default App;
