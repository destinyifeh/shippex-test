import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../libs/query-client';

import { ReactNode } from 'react';

export function QueryProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
