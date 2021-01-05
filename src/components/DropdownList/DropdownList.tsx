import React, {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Typography from 'components/Typography';
import { ReactComponent as V } from 'assets/V.svg';
import { cn } from 'utils/bem';
import { mapIndexToTitleNumber } from './shared';
import './DropdownList.scss';

const dropdownList = cn('DropdownList');

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
    <div className={dropdownList(null, [className])}>
      <button
        className={dropdownList('button')}
        onClick={buttonClickHandler}
      >
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
          <V
            className={dropdownList('v', {
              active: isActive,
            })}
          />
        </span>
      </button>

      <div
        ref={listRef}
        className={dropdownList('list', {
          active: isActive,
        })}
        style={isReady ? { maxHeight: currentHeight } : {}}
      >
        <ul className={dropdownList('items')}>
          {items.map((value, i) => (
            <li className={dropdownList('item')} key={i}>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownList;
