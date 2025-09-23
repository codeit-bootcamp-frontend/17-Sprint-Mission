/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import * as React from "react";
  const Component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default Component;
}
