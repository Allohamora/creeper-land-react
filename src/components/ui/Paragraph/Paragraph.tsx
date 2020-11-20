import React from 'react';
import clsx from 'clsx';
import './Paragraph.scss';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?: boolean;
  primary?: boolean;
  small?: boolean;
  big?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  weight,
  primary,
  big,
  small,
  ...rest
}) => (
  <p
    className={clsx(
      'paragraph',
      {
        paragraph_primary: primary,
        paragraph_weight: weight,
        paragraph_small: small,
        paragraph_big: big,
      },
      className,
    )}
    {...rest}
  />
);

export default Paragraph;
