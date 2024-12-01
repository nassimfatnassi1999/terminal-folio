import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "National Diploma in Computer Science, specializing in Cloud Computing",
    desc: "Private Higher School of Engineering and Technology (ESPRIT) | 2022 - 2025",
  },
  {
    title: "Applied Bachelor’s Degree in Mechanical Engineering, specializing in Mechatronics",
    desc: "Higher Institute of Technological Studies of Beja | 2018 - 2021",
  },
  {
    title: "Baccalaureate in Technical Sciences",
    desc: "Chwigui Tebourba High School | 2017 - 2018",
  },
];

export default Education;
