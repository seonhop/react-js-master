import styled from "styled-components";

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>
    `Hello ${playerObj.name} you are ${playerObj.age} years old`;

sayHello({ name: "nico", age: 12 });

interface ContainerProps {
    bgColor: string;
}

interface CircleProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
}

export default Circle;
