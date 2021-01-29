import styled from "styled-components";

const Footer = styled.footer`
  height: 50px;
  text-align: center;
  flex-shrink: 0;
  color: var(--color-grey);

  & a {
    text-decoration: none;
    border-bottom: solid 3px var(--color-primary-light);
    box-shadow: inset 0 -0.3em 0 var(--color-primary-light);
    color: var(--color-primary-dark);
    font-weight: 600;
    padding: 2px 0;

    &:hover {
      background: var(--color-primary-light);
    }
  }
`;

export default Footer;
