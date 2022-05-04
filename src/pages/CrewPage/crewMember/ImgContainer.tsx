import {motion} from "framer-motion";
import {useEffect, useState} from "react";

type ImgContainerProps = {
    images: string[];
    currentIndex: number;
    className?: string
}

const ImgContainer = ({images, currentIndex, className}: ImgContainerProps) => {
    const [img, setImg] = useState<HTMLImageElement>()

    useEffect(() => {
        const img = new Image();
        img.src = images[currentIndex]
        setImg(img);
    }, [images, currentIndex])

    return (
        <div className={className}>
            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
                src={img?.src}
                alt={"team member"}
            />
        </div>
    );
};

export default ImgContainer;
