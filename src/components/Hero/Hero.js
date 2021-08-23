import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Sheersho. <br />
        Welcome to My Portfolio 
      </SectionTitle>
      <SectionText>
      I am an aspiring developer from Dhaka, Bangladesh. Since graduating Univeristy, I have been delving deeper into the world of development and finding out about new technologies, building fun projects and incorporating all the best practices into my workflow. Learning has never felt so rewarding and I am loving every second of it.  
      </SectionText>
      <Button onClick={() => window.location = '/#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;