import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans') main
      height: 100vh width: 100vw background: #fff display: flex flex-direction:
      column justify-content: center align-items: center font-family:
      'Merriweather Sans',
    sans-serif #errorText font-size: 22px margin: 14px 0 #errorLink font-size:
      20px padding: 12px border: 1px solid color: #000 background-color:
      transparent text-decoration: none transition: all 0.5s ease-in-out &:
      hover,
    &: active color: #fff background: #000 #g6219 transform-origin: 85px 4px
      animation: an1 12s 0.5s infinite ease-out @keyframes an1 0% transform:
      rotate(0) 5% transform: rotate(3deg) 15% transform: rotate(-2.5deg) 25%
      transform: rotate(2deg) 35% transform: rotate(-1.5deg) 45% transform:
      rotate(1deg) 55% transform: rotate(-1.5deg) 65% transform: rotate(2deg)
      75% transform: rotate(-2deg) 85% transform: rotate(2.5deg) 95% transform:
      rotate(-3deg) 100% transform: rotate(0);
`;
