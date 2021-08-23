import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with various techlogies in the development world, from back-end to design. I am hungry to keep learning more and adapt myself with the industry standard tech, as well as the more niche side of things as well.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Python and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>OOP</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, JavaFX
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
