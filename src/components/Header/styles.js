import styled from 'styled-components'
import { Image } from 'grommet'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  color: #f6f6f6;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  height: 25px;

  &::after {
    position: absolute;
    bottom: -10px;
    height: 3px;
    width: 100%;
    background-color: #ffca58;
    display: block;
    content: ' ';
  }
`

export const LogoImage = styled(Image)`
  height: 45px;
`
