import styled, { css } from "styled-components";



const RoundCardContainer = styled.div
    .withConfig({ shouldForwardProp: prop => !['isFlipped', 'isIdle'].includes(prop) })`
    width: var(--numbers-4-x-4);
    height: var(--numbers-4-x-4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Added background-color transition */
    padding: 0.25em;
    font-size: var(--numbers-4-x-4);
    color: var(--text);

    ${(props) =>
        props.isFlipped &&
        css`
        background-color: var(--accent-yellow);
        /* Removed transform: rotateY(180deg); */
      `}

    ${(props) =>
        !props.isFlipped &&
        css`
        background-color: var(--less-dark-background);
      `}

    ${(props) =>
        props.isIdle &&
        css`
        background-color: var(--idle-bgr);
      `}

    &:hover {
      transform: ${(props) => (props.isIdle ? "scale(1.1)" : "none")};
    }
  `;


const Card = ({ content, isFlipped, isIdle, onClick }) => {
    return (
        <RoundCardContainer isFlipped={isFlipped} isIdle={isIdle} onClick={onClick}>
            {isFlipped || isIdle ? content : null}
        </RoundCardContainer>

    );
};


export default Card;

