declare global {
  interface Window {
    Kakao: any;
  }
}

declare module "@heroicons/react/outline" {
  import { SVGAttributes } from "react";
  
  export class HeartIcon extends React.Component<SVGAttributes<SVGElement>> {}
  export class HeartOutlineIcon extends React.Component<SVGAttributes<SVGElement>> {}
}

declare module "@heroicons/react/solid" {
  import { SVGAttributes } from "react";

  export class HeartIcon extends React.Component<SVGAttributes<SVGElement>> {}
}