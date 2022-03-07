import "../../index.scss";
import classes from "./TypographySection.module.css";
import clsx from "clsx";

const TypographySection = () => {
  return (
    <section id="typography">
      <h2 className={"numberedTitle"}>
        <span>02</span>Typography
      </h2>
      <div className={"flex"}>
        <div className={clsx(classes.flexDescendant, "flow")}>
          <div>
            <p className={"textAccent"}>
              Heading 1 - Bellefair Regular - 150px
            </p>
            <p className={clsx("uppercase", "ffSerif", "fs900")}>Earth</p>
          </div>
          <div>
            <p className={"textAccent"}>
              Heading 2 - Bellefair Regular - 100px
            </p>
            <p className={clsx("uppercase", "ffSerif", "fs800")}>Venus</p>
          </div>
          <div>
            <p className={"textAccent"}>Heading 3 - Bellefair Regular - 56px</p>
            <p className={clsx("uppercase", "ffSerif", "fs700")}>
              Jupiter & Saturn
            </p>
          </div>
          <div>
            <p className={"textAccent"}>Heading 4 - Bellefair Regular - 32px</p>
            <p className={clsx("uppercase", "ffSerif", "fs600")}>
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p className={"textAccent"}>
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p
              className={clsx(
                "uppercase",
                "ffSansCond",
                "fs500",
                "letterSpacing1",
                "textAccent"
              )}
            >
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div className={clsx(classes.flexDescendant, "flow")}>
          <div>
            <p className={"textAccent"}>
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className={clsx("uppercase", "ffSerif", "fs500")}>384,400 km</p>
          </div>
          <div>
            <p className={"textAccent"}>
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p
              className={clsx(
                "uppercase",
                "ffSerif",
                "fs200",
                "letterSpacing3"
              )}
            >
              Avg. Distance
            </p>
          </div>
          <div>
            <p className={"textAccent"}>
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p
              className={clsx(
                "uppercase",
                "ffSerif",
                "fs300",
                "letterSpacing2"
              )}
            >
              Europa
            </p>
          </div>
          <div>
            <p className={"textAccent"}>Body Text</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;
