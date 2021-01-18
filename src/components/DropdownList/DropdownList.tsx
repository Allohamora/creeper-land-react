import React, {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Typography from 'components/Typography';
import {
  Wrap,
  Button,
  V,
  List,
  Items,
  Item,
} from './styles';
import { mapIndexToTitleNumber } from './shared';

interface DropdownListProps {
  beforeTitleIndex?: number;
  title: string;
  items: string[];
  className?: string;
}

const DropdownList: React.FC<DropdownListProps> = ({
  beforeTitleIndex,
  title,
  items,
  className,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!listRef.current) return;

    const currentHeight = listRef.current.clientHeight;
    setMaxHeight(currentHeight);
    setIsActive(false);
    setIsReady(true);
  }, [listRef]);

  const isBeforeTitleIndexExist =
    typeof beforeTitleIndex === 'number';
  const buttonClickHandler = () => setIsActive(!isActive);
  const currentHeight = isActive ? maxHeight : 0;

  return (
    <Wrap className={className}>
      <Button onClick={buttonClickHandler}>
        <Typography
          variant="h4"
          color="white"
          component="span"
        >
          {isBeforeTitleIndexExist &&
            `${mapIndexToTitleNumber(
              beforeTitleIndex as number,
            )}. `}
          {title}
        </Typography>
        <span>
          <V $active={isActive} />
        </span>
      </Button>

      <List
        ref={listRef}
        style={isReady ? { maxHeight: currentHeight } : {}}
      >
        <Items>
          {items.map((value, i) => (
            <Item key={i}>
              <Typography variant="p2" color="black">
                <Typography
                  variant="h4"
                  color="black"
                  component="span"
                >
                  {isBeforeTitleIndexExist &&
                    `${(beforeTitleIndex as number) + 1}.`}
                  {`${i + 1} `}
                </Typography>

                <span>{value}</span>
              </Typography>
            </Item>
          ))}
        </Items>
      </List>
    </Wrap>
  );
};

export default DropdownList;
