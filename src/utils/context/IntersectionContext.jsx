import { createContext, useEffect, useRef } from "react";

import useIntersecton from "../hooks/useIntersection";

export const IntersectionContext = createContext({});

export const IntersectionProvider = ({ children }) => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const { isIntersecting: inVP1, current: element1 } = useIntersecton(
    section1,
    "-10%"
  );
  const { isIntersecting: inVP2, current: element2 } = useIntersecton(
    section2,
    "-20%"
  );

  const { isIntersecting: inVP3, current: element3 } = useIntersecton(
    section3,
    "-20%"
  );

  const { isIntersecting: inVP4, current: element4 } = useIntersecton(
    section4,
    "-20%"
  );

  const { isIntersecting: inVP5, current: element5 } = useIntersecton(
    section5,
    "-20%"
  );

  useEffect(() => {
    // Cleanup function to disconnect all Intersection Observer instances
    return () => {
      return () => {
        const observerList = [
          element1,
          element2,
          element3,
          element4,
          element5,
        ].filter(Boolean); // filter out undefined elements
        observerList.forEach((element) => {
          element && element.disconnect();
        });
      };
    };
  }, [element1, element2, element3, element4, element5]);

  const scrollTo = (section) => {
    section && section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <IntersectionContext.Provider
      value={{
        inVP1,
        inVP2,
        inVP3,
        inVP4,
        inVP5,
        element1,
        element2,
        element3,
        element4,
        element5,
        scrollTo,
        section1,
        section2,
        section3,
        section4,
        section5,
      }}
    >
      {children}
    </IntersectionContext.Provider>
  );
};
