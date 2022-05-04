import useWindowDimensions from "../../../hooks/useWindowDimensions";
import classes from "./TechnologyImg.module.css";
import {motion} from "framer-motion";

import spaceVehicleLandscape from "../../../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceVehiclePortrait from "../../../assets/technology/image-launch-vehicle-portrait.jpg"
import spacePortLandscape from "../../../assets/technology/image-spaceport-landscape.jpg"
import spacePortPortrait from "../../../assets/technology/image-spaceport-portrait.jpg"
import spaceCapsuleLandscape from "../../../assets/technology/image-space-capsule-landscape.jpg"
import spaceCapsulePortrait from "../../../assets/technology/image-space-capsule-portrait.jpg"
import {useEffect, useState} from "react";

const landscapeImages = [spaceVehicleLandscape, spacePortLandscape, spaceCapsuleLandscape]
const portraitImages = [spaceVehiclePortrait, spacePortPortrait, spaceCapsulePortrait]

const TechnologyImg = ({currentIndex}: { currentIndex: number }) => {
    const [img, setImg] = useState<HTMLImageElement>()
    const {width} = useWindowDimensions();

    useEffect(() => {
        const img = new Image();
        img.src = width < 1024 ? landscapeImages[currentIndex] : portraitImages[currentIndex]
        setImg(img);
    }, [currentIndex, width])

    return (
        <div className={classes.imgDiv}>
            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.75}}
                src={img?.src}
                alt="technology"
            />
        </div>
    );
};

export default TechnologyImg;
