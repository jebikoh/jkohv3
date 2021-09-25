import * as React from 'react';
import {Link} from 'react-scroll';
// MUI

interface Props {
  children: React.ReactNode;
  to: string;
}

export default function SmoothScrollButton({children, to}: Props) {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={1000}>
      {children}
    </Link>
  );
}
