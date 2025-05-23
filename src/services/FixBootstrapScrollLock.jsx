import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function FixBootstrapScrollLock() {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, [location]);

  return null;
}
