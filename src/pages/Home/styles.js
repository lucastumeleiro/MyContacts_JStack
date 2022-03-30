import Styled from "styled-components";

export const Container = Styled.div`
    margin-top:32px
`;

export const InputSearchContainer = Styled.div`
    width: 100%;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;
    }
    &::placeholder {
        color: #bcbcbc;
    }
`;

export const Header = Styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 32px;

    strong{
        font-size: 24px;
    }

    a{
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration:none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius:4px;
        transition: all 0.3s ease-in;

    &:hover{
        background: ${({ theme }) => theme.colors.primary.main};
        color:#fff;
    }
    }

`;

export const ListContainer = Styled.div`
    margin-top:24px;

    header {
        margin-bottom: 8px;

        button {
            display: flex;
            align-items: center;
            background: transparent;
            border: none;
        }

        span{
            margin-right: 8px;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary.main};
        }
    }
`;

export const Card = Styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius:4px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &+&{
        margin-top: 8px;
    }

    .info{
        .contact-name {
            display: flex;
            align-items: center;

            small{
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span{
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

        .actions {
            display: flex;
            align-items: center;

            button {
                background: transparent;
                border: none;
                margin-left: 8px;
            }
        }
`;
