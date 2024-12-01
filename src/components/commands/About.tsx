import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nassim Fatnassi Hnifi</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a DevOps Engineer</HighlightAlt> based in Tunisia.
      </p>
      <p>
        I am passionate about DevOps Culture and System administration <br />
        developing microservices applications, and using DevOps tools to ensure cloud-native applications.
      </p>
    </AboutWrapper>
  );
};

export default About;
