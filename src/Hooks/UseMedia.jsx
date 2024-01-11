import React from "react";

const UseMedia = (media) => {
  const [match, SetMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      SetMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default UseMedia;
