import { http, createConfig } from "wagmi";
import { base, mainnet, optimism } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import { blastChain } from "./blastChain";

export const config = createConfig({
  chains: [blastChain],
  connectors: [metaMask()],
  transports: {
    [blastChain.id]: http(),
  },
});
