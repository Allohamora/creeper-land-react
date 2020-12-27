import { cn } from './bem';

it('Test block and element', () => {
  const block = cn('block');
  const full = block('title', { test: true });

  expect(full).toBe('block__title block__title_test');
});
