import React from 'react';
import clsx from 'clsx';
import { getModifiers } from 'utils/ui';
import { colors as colorsVar } from 'styles/vars';
import Override, { OverrideProps } from '../Override';
import './Typography.scss';

const base = 'typography';

const rawVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p1',
  'p2',
  'p3',
] as const;
const rawWeights = ['normal', '400', '500', 'bold', '700'] as const;
const rawColors = [...colorsVar, 'inherit'] as const;

const variants = getModifiers(base, rawVariants);
const colors = getModifiers(base, rawColors);
const weights = getModifiers(base, rawWeights);

export interface TypographyProps extends OverrideProps {
  variant?: typeof rawVariants[number];
  color?: typeof rawColors[number];
  weight?: typeof rawWeights[number];
}

const Typography: React.FC<TypographyProps> = ({
  color = 'black',
  variant,
  weight,
  className,
  ...props
}) => (
  <Override
    className={clsx(
      base,
      variant && variants[variant],
      colors[color],
      weight && weights[weight],
      className,
    )}
    {...props}
  />
);

export const Paragraph: React.FC<TypographyProps> = ({
  component = 'p',
  ...props
}) => <Typography component={component} {...props} />;

export default Typography;
