import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! I'm Sheersho. <br />
        Welcome to My Portfolio 
      </SectionTitle>
      <SectionText>
      I'm a dedicated software developer currently based in Dhaka, Bangladesh. With a strong background in computer science, I am currently working as a game developer at Free Pixel Games Ltd. Since entering this world of computer science and development, I have always been very enthusiastic about learning all I can from it and am constantly looking to expand my skill set and enhance my expertise from any opportunities that present itself. What pushes me forward is a passion for creating innovative and efficient solutions that can address real-world challenges. On that end, I am always committed, both on a micro and macro scale, on delivering high-quality software products that can have a positive impact on a user's life. As I move forward in this field that witholds endless possibility and constant innovation, I am very excited to learn all I can and contribute all that I am able to.   
      </SectionText>
      <Button onClick={() => window.location = '/#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;