declare module "*.json" {
  const value: any;
  export default value;
}
declare module "*.sass" {
  const content: any;
  export default content;
}
declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "react-resize-detector" {
  const content: any;
  export default content;
}
