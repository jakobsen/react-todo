import styled from "styled-components";

const Footer = styled.footer`
  height: 50px;
  text-align: center;
  flex-shrink: 0;
  color: var(--color-grey);

  & a {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
    padding: 2px 0;

    &:hover {
      color: #fff;
      background: var(--color-primary);
    }
  }
`;

export default Footer;
