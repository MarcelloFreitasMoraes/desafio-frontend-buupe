import { Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcn-plugin";
import animatePlugin from "tailwindcss-animate";

export const shadcnPreset: Config = {
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
