import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        What I lack in experience, I make up for in motivation, enthusiasm and work ethic. Or that's what I would like to think at least. Being a fresh graduate out of the waters, I am very excited to establish myself in the field of development and familiarize myself with industry standard practices and technology. Being a very adaptive person and a fast learner to boot, I have full confidence that I will be able to make a place for myself and leave my own mark if given the opportunity. I also enjoy working in teams of like-minded individuals, as having someone to bounce ideas off of only helps to promote a healther and more creative form of expression. I very deeply enjoy problem solving and puzzles, as it is part of the reason why I chose the field I am in and love the field I am in. <br /> <br />

        Being a straight A student school and university, I am confident in my ability to maintain consistency and perform up to standards expected of me and standards I set for myself. I have a wide area of interests and hobby that not only help entertain me, but also serve to inspire me in my endeavors. I am also quite competitive, though more on the healthy side, and there is no greater competition than with my past self. I seek constant improvement and learning and nothing excites meeting my goals and being a better version of me than I was yesterday.
      </SectionText>
    </Section>
  );
};

export default Timeline;
