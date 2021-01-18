import Typography from 'components/Typography';
import styled from 'styled-components';

interface TitleProps {
  type?: 'case' | 'shop';
}

const Title = styled(Typography)<TitleProps>`
  padding-bottom: ${(p) =>
    p.type === 'case' ? '12px' : '19px'};
`;

Title.defaultProps = {
  variant: 'h2',
  color: 'black',
};

export default Title;
