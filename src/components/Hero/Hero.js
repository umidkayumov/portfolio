import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am curious about learning Frontend development and increasing my
          knowledge by participating and doing real world projects
        </SectionText>
        <Button onClick={props.handleClick}>
          <a
            href="/Umid.pdf"
            download
            style={{ textDecoration: "none", color: "white" }}
          >
            Download CV
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
