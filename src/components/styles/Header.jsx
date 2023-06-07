import styled from "styled-components";

export const Header = styled.header`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 150px;
    cursor: pointer;
  }

  .btn-try {
    padding: 10px 35px;
    border-radius: 30px;
    background-color: var(--neutral-very-pale-cyan);
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: hsl(
        193.3333333333334,
        34.615384615384606%,
        89.80392156862746%
      );
    }
  }
`;
