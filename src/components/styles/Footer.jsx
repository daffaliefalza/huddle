import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--neutral-very-dark-cyan);
  padding: 8rem 0;
  color: #fff;

  .filter-black {
    filter: invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg)
      brightness(104%) contrast(104%);
    width: 150px;
  }

  .footer-logo {
    margin-bottom: 2rem;
  }

  .footer-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  .footer-row a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .col-1 div:nth-child(2) {
    margin: 15px 0;
  }

  .col-2,
  .col-3 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .location,
  .phone,
  .email {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-row img {
    width: 15px;
  }

  .col-4 svg {
    font-size: 30px;
    margin: 0 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    .footer-row {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 40px;
    }
  }
`;
