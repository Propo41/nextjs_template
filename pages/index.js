import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <img
        src="https://phototraces.b-cdn.net/wp-content/uploads/2022/08/fi_Fameous_Female_Photographers_02_Annie_Leibovitz.jpg"
        width={windowWidth} // width height must be provided for next/image since they are not provided during the build process
        height={windowHeight}
        style={{ objectFit: "cover" }}
      />
      {/* <Image
        src="https://phototraces.b-cdn.net/wp-content/uploads/2022/08/fi_Fameous_Female_Photographers_02_Annie_Leibovitz.jpg"
        alt="Picture of the author"
        width={windowWidth} // width height must be provided for next/image since they are not provided during the build process
        height={windowHeight}
        blurDataURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsnN17ah2woIYdCLoAjp_35xt8Bv434VvTEgR_Lbf7g&s"
        placeholder="blur" // Optional blur-up while loading
        style={{ objectFit: "cover" }}
        layout="responsive"
      /> */}
      <p>Welcome to my homepage!</p>
    </>
  );
}
