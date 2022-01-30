import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }: { children: any }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.split("#")[1]);
      element?.scrollIntoView();
    } else document.documentElement.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return children;
};

export default Wrapper;
