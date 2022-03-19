import useWindowDimensions from "../../../hooks/useWindowDimensions";

const TechnologyImg = ({ technologyName }: { technologyName: string }) => {
  const { width } = useWindowDimensions();
  const getNameString =
    technologyName.toLowerCase().replaceAll(" ", "-") +
    `${width > 1024 ? "-portrait" : "-landscape"}`;
  return (
    <div>
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
