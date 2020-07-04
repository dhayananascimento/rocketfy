import styled, { css } from 'styled-components'

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.data.done? 0.6 : 1};
    overflow-y: auto;
    margin-left: 10px;

   
    border: 2px solid transparent;

    && + div {
        border-left: 2px solid rgba(0,0,0,0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 5px;
        height: 52px;

        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 18px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }

    ${
        props => props.isOver && css`
            border: 2px solid rgba(0, 0, 0, 0.05);
        `
    }
`