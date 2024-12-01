import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const CvFr: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check if the current command is "cv_fr" ===== */
  if (rerender && currentCommand[0] === "cvfr") {
    // Google Drive link for your CV
    const cvLink = "https://drive.google.com/file/d/1FcAOOMY_899Mc0SQNrx20idgi6TUuLTg/view?usp=drive_link";
    window.open(cvLink, "_blank");
  }

  return <span></span>;
};

export default CvFr;
