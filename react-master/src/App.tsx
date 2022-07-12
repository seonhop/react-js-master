import Circle from "./Circle";
import styled from "styled-components";

const Square = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
`;

function App() {
    return (
        <div>
            <Circle borderColor="black" bgColor="teal" />
            <Circle text="hi" bgColor="tomato" />
        </div>
    );
}

export default App;
