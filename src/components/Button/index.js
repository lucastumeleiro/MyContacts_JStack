import styled, { css } from "styled-components";

export default styled.button`
    height: 52px;
    border: none;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    transition: 0.2s ease-in;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.01);
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
        background: #ccc;
        cursor: default;
        &:hover {
            filter: none;
            transform: none;
        }
    }

    ${({ theme, danger }) =>
        danger &&
        css`
            background: ${theme.colors.danger.main};

            &:hover {
                filter: brightness(120%);
                transform: scale(1.01);
            }

            &:active {
                background: ${theme.colors.danger.dark};
            }

            &:disabled {
                background: #ccc;
                cursor: default;
                &:hover {
                    filter: none;
                    transform: none;
                }
            }
        `}
`;
