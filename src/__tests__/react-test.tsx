import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from 'providers/AppProvider';

export const renderInAppContext = (component: ReactNode) =>
  render(<AppProvider>{component}</AppProvider>);
