import type React from 'react';
import * as reactRuntime from 'react/jsx-runtime';
import { Callout } from './Callout';
import { Link } from './Link';
import { Separator } from './Separator';

const sharedComponents = {
  a: Link,
  hr: Separator,
  Callout,
};

const getMDXComponent = (code: string) => {
  // eslint-disable-next-line ts/no-implied-eval
  const fn = new Function(code);
  return fn({ ...reactRuntime }).default;
};

export interface MDXContentProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = ({
  code,
  components,
}: MDXContentProps) => {
  const Component = getMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
