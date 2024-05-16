import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.isWinningCell ? props.theme.colors.purple : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 2.5rem;
  width: 10rem;
  height: 10rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding: 1rem;

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }
  &:hover {
    .outlineIcon {
      path {
        stroke-width: 2;
      }
    }
  }
`;
