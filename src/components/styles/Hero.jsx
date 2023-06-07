import styled from "styled-components";

export const Hero = styled.section`
  margin-top: 7rem;
  display: flex;
  align-items: center;
  gap: 50px;

  .headline {
    flex: 3;

    h1 {
      font-family: var(--ff-poppins);
      font-weight: var(--fw-600);
    }

    p {
      margin: 20px 0;
    }

    .btn-get-started {
      background-color: var(--primary-pink);
      color: #fff;
      padding: 10px 25px;
      border-radius: 25px;
      border: 0;
      transition: all 0.5s;
      cursor: pointer;

      &:hover {
        background-color: hsl(
          321.9428571428571,
          79.90867579908675%,
          42.94117647058824%
        );
      }
    }
  }

  .hero-image {
    flex: 5;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
