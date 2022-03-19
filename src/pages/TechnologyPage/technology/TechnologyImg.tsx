import useWindowDimensions from "../../../hooks/useWindowDimensions";
import classes from "./TechnologyImg.module.css";

const TechnologyImg = ({ technologyName }: { technologyName: string }) => {
  const { width } = useWindowDimensions();
  const getNameString =
    technologyName.toLowerCase().replaceAll(" ", "-") +
    `${width >= 1024 ? "-portrait" : "-landscape"}`;
  return (
    <div className={classes.imgDiv}>
      <img
        src={require("../../../assets/technology/image-" +
          getNameString +
          ".jpg")}
        alt="technology"
      />
    </div>
  );
};

export default TechnologyImg;
