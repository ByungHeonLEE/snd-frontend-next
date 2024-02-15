"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/app/_config/wagmiConfig";

// 2. Set up a React Query client.
const queryClient = new QueryClient();

interface WagmiProviderProps {
  children: React.ReactNode;
}

export const BlastProvider = ({ children }: WagmiProviderProps) => {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
