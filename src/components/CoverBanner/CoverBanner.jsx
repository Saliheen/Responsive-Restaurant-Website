import React from "react";
import bgCoverImg from "../../assets/biryani_cover.jpg";

const CoverBanner = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    height: "200px",
    width: "100%",
  };

  return <div style={bgImage}></div>;
};

export default CoverBanner;
