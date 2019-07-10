// @flow strict

// TODO: create props type the right way
type SVGComponentPropsType = {|
  className?: string
|};

type SVGComponentType = (props: SVGComponentPropsType) => React$Element<"svg">;

type SVGModuleType = {
  ReactComponent: SVGComponentType
};

declare module "SVGModule" {
  declare module.exports: SVGModuleType;
}
