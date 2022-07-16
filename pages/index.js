import * as React from 'react';
import Hero from '../src/sections/Hero';
import Description from '../src/sections/Description';
import Testimony from '../src/sections/Testimony';
import Pov from '../src/sections/Pov';
import Resource from '../src/sections/Resource';
import HelpAndTips from '../src/sections/HelpAndTips';
import Closing from '../src/sections/Closing';

export default function Index() {
  return (
    <>
      <Hero />
      <Description />
      <Testimony />
      <Pov />
      <Resource />
      <HelpAndTips />
      <Closing />
    </>
  );
}
