import clsx from "clsx";
import classes from "../CrewPage.module.css";
import Heading from "../../../ui/typography/Heading";
import BodyText from "../../../ui/typography/BodyText";
import SubHeading from "../../../ui/typography/SubHeading";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const MemberInfo = ({
  role,
  name,
  bio,
}: {
  role: string;
  name: string;
  bio: string;
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className={clsx(classes.memberInfoDiv)}>
      <div className={classes.memberInfoHeadings}>
        <SubHeading size={1} className={classes.crewMemberRole}>
          {role}
        </SubHeading>
        <Heading size={width > 560 ? 3 : 4}>{name}</Heading>
      </div>
      <BodyText className={classes.bodyText}>{bio}</BodyText>
    </div>
  );
};

export default MemberInfo;
