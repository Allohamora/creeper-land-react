import styled from 'styled-components';
import { media } from 'styles/helpers';
import { background } from 'utils/images';

const backgroundImage = background('chart__placeholder.png');
const mobileBackgroundImage = background(
  'chart__placeholder-mobile.png',
);

export const Chart = styled.div`
  display: flex;
  width: 100%;
  height: 204px;
  margin-top: 10px;

  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
  background-position: center center;

  ${media.max('mobile')} {
    height: 101px;

    background-image: url('${mobileBackgroundImage}');
  }
`;
