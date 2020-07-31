import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Site criado na #imersãoReact
        {' '}
        <a href="https://www.alura.com.br/">
           Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;