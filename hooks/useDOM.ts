import { useEffect, useState } from "react";
import { uuid } from "../helpers/generateUUID";

export const useDOM = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    div.className = "fixed bottom-2 left-2 z-10";
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);
    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
