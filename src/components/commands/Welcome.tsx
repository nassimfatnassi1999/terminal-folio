import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  N   N    AAAAA   SSSSS  SSSSS  III  M   M
  NN  N   A     A  S       S     I   MM MM
  N N N   AAAAAAA  SSSSS   SSSSS  I   M M M
  N  NN   A     A     S       S   I   M   M
  N   N   A     A  SSSSS  SSSSS  III  M   M

          `}
        </PreName>
        <div>Welcome to my terminal portfolio.</div>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <br />
        <p>Top commands used  <b>about, socials, cvfr, cvEn </b></p>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"DEVOPS   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
