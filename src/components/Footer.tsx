import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  /* Adjust the padding, background, etc., as needed */
  padding: 20px 0;
`;

const Footer = () => {
  return (
    <footer>
      <FooterContainer className="bg-dark" data-bs-theme="dark">
        <p>© 2024 My Site</p>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
