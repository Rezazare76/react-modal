import { createContext } from "react";

import { modalsContainerSectionsType } from "./modalContainer.type";

export const ModalsContainerContext = createContext<{
  setShowModal: (arg: "hide") => void;
  setSection: (arg: modalsContainerSectionsType) => void;
  showModal?: "open" | "hide";
}>({ setShowModal: () => {}, setSection: () => {} });
