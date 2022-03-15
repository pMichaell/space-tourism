import classes from "../CrewPage.module.css";

const MemberImg = ({ memberName }: { memberName: string }) => {
  return (
    <div className={classes.imgDiv}>
      <img
        src={require("../../../assets/crew/image-" +
          memberName.toLowerCase().replaceAll(" ", "-") +
          ".png")}
        alt={memberName + " team member"}
        className={classes.img}
      />
    </div>
  );
};

export default MemberImg;
