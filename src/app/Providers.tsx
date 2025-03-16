"use client";

import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LayoutManager from "@layouts/LayoutManager";
import { EpisodesInitializer } from "@/ui/components/EpisodesInitializer/EpisodesInitializer";
import { UserInitializer } from "@/ui/components/UserInitializer/UserInitializer";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <EpisodesInitializer />
        <UserInitializer />
        <LayoutManager>{children}</LayoutManager>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
