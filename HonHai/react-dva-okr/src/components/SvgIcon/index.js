import styled from 'styled-components';

const styleFn = ()=>{
  return {

  }
}

const SvgStyle = styled.span`
  ${props => props.className}{
    color: red;
  }
  '#icon-'+${props => props.className}{
    mask: url('../assets/icons/'+${props => props.className}) no-repeat 50% 50%,
    '-webkit-mask': url('../assets/icons/'+${props => props.className}) no-repeat 50% 50%,
  }
`;

const SvgIcon = (props)=> {
  const { className } = props;
  console.log('SvgIcon:',props)

  return (
    <SvgStyle icon={className}>
      <svg className={'svg-icon ' + className} aria-hidden={true}>
        <use xlinkHref={'#icon-'+className} ></use>
        {/*<image xlinkHref={'#icon-' + className} width="60" height="60"/>*/}
      </svg>
    </SvgStyle>
  )
}

export default SvgIcon
