import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        "2": "0 0 auto",
        "3": "1 0",
        "4": "1 0 auto",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
