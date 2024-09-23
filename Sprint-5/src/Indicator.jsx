import React from "react";
import styled from 'styled-components';

const Bullet = styled.div`
    height: 8px;
    border-radius: ${(props) => (props.active ? '45%' : '50%')};
    margin: 25px 5px 0;
    background-color: ${(props) => (props.active ? 'black' : 'lightgray')};
    width:  ${(props) => (props.active ? '20px' : '8px')};
    cursor: pointer;
`;

const IndicatorContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
    margin: 0 0 0 15px;
`;

function Indicator ({tutorialData, step, setStep}) {
    return (
        <IndicatorContainer>
            {Array.from({ length: tutorialData }).map((_, index) => (
                <Bullet 
                key={index} 
                active={index === step} 
                onClick={() => setStep(index)} 
                />
            ))}
        </IndicatorContainer>
    );
}

export default Indicator;