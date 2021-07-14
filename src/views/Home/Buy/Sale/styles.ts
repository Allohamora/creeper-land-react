import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { fontSize, media } from 'styles/helpers';
import { background } from 'utils/images';

const promoBg = background('promo_bg.png');
const promoBgMobile = background('promo_bg_mobile.png');

export const Wrap = styled.div`
  margin-top: 20px;
  padding-top: 61px;
  padding-bottom: 53px;
  padding-left: 88px;

  background-image: url('${promoBg}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;

  ${media.max('mobile')} {
    padding: 49px 36px 64px;

    text-align: center;

    background-image: url('${promoBgMobile}');
    background-position: center center;
  }
`;

export const Price = styled(Typography).attrs({
  color: 'purple',
})`
  ${fontSize({ fs: 32, ln: 38, mfs: 22, mln: 26 })}

  padding-top: 10px;

  font-weight: 500;
`;
