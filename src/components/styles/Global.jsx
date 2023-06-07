import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        /* colors */
        --primary-pink: hsl(322, 100%, 66%);
        --neutral-very-pale-cyan:  hsl(193, 100%, 96%);
        --neutral-very-dark-cyan: hsl(192, 100%, 9%);
        --neutral-grayish-blue: hsl(180, 1.6949152542372816%, 88.4313725490196%);


        /* fonts */

        --fs-body: 18px;

        /* headings */
        --ff-poppins: 'Poppins', sans-serif;
        --fw-600: 600;

        /* body, cta */
        --ff-open-sans: 'Open Sans', sans-serif;
        --fw-400: 400;
        --fw-700: 700;
    }

    body { 
        font-family: var(--ff-open-sans);
        font-size: var(--fs-body);
        line-height: 1.5;
    }

    img {
        width: 100%;
        display: block;
        object-fit: cover;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--ff-poppins);
        font-weight: var(--fw-600);
    }

`;
