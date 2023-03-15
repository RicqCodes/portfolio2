import { useContext } from "react";
import { IntersectionContext } from "../context/IntersectionContext";

const useIntersectionContext = () => {
  const intersection = useContext(IntersectionContext);

  return intersection;
};

export default useIntersectionContext;
