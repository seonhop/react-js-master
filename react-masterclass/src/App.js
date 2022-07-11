import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Btn = styled.button`
    background-color: teal;
    color: white;
`;

function App() {
    return (
        <Father>
            <Btn>Log In</Btn>
            <Btn as="a">Hello</Btn>
        </Father>
    );
}

export default App;
