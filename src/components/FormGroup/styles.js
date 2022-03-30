import styled from "styled-components";

export const Container = styled.div`
    & + & {
        margin-top: 16px;
    }

    small {
        display: block;
        color: ${({ theme }) => theme.colors.danger.main};
        margin-left: 16px;
        margin-top: 8px;
        font-size: 12px;
    }
`;
