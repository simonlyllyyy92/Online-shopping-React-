import styled, {css} from 'styled-components'

import {Link} from 'react-router-dom'

const OptionContainerStyles = css`
      padding: 10px 15px;
      cursor: pointer;
      @media screen and (max-width: 768px){
         display:none;
      }
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;  
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    padding: 10px;
    @media screen and (max-width: 768px){
      padding: 15px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`
export const ToggleButton = styled.div`
    @media screen and (min-width: 769px) {
      display: none;
    }
`