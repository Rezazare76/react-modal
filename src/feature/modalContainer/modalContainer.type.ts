export type modalsContainerSectionsType = "login" | "sign-up" | null;
export type modalsContainerType = {
  sectionProps: modalsContainerSectionsType;
  setSectionProps: (arg: modalsContainerSectionsType) => void;
};
