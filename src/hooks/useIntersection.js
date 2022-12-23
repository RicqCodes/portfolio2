import { useEffect, useState } from "react";

const useIntersecton = (element, rootMargin) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { current } = element;
  useEffect(() => {
    const { current } = element;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer?.unobserve(current);
  }, [element, rootMargin]);
  return { isIntersecting, current };
};

export default useIntersecton;