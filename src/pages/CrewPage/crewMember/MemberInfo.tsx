import clsx from "clsx";
import classes from "../CrewPage.module.css";
import Heading from "../../../ui/typography/Heading";
import BodyText from "../../../ui/typography/BodyText";

const MemberInfo = ({
  role,
  name,
  bio,
}: {
  role: string;
  name: string;
  bio: string;
}) => {
  return (
    <div className={clsx("flex", classes.memberInfoDiv)}>
      <div className={clsx("flex", classes.headingsDiv)}>
        <Heading size={4} className={classes.crewMemberRole}>
          {role}
        </Heading>
        <Heading size={3}>{name}</Heading>
      </div>
      <BodyText className={classes.bodyText}>{bio}</BodyText>
    </div>
  );
};

export default MemberInfo;
