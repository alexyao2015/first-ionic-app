import "./ExploreContainer.scss";
import React from "react";

interface ContainerProps {
  pageName: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ pageName }) => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="container">
      <strong>This is page name: {pageName}</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <p>
        This window is {dimensions.width} wide and {dimensions.height} high
      </p>
    </div>
  );
};

export default ExploreContainer;
