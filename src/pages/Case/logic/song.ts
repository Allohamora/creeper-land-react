import { HTMLMediaControls } from 'react-use/lib/util/createHTMLMediaHook';
import { Status } from '../shared';

export const renderRollSong = (
  status: Status,
  controls: HTMLMediaControls,
): void => {
  if (status === 'started') {
    controls.play();
  } else if (status === 'ended') {
    controls.pause();
    controls.seek(0);
  }
};
