import styled from "styled-components";

export const Content = styled.main`
  margin-bottom: 10rem;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 40px;
    border: 1px solid var(--neutral-grayish-blue);
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    .cards {
      display: flex;
      flex-direction: column;
    }
    .cards p {
      margin: 15px 0;
    }
  }
`;
