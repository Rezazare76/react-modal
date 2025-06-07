import { ReactNode } from "react";

export interface ModalProps {
  closeClick: () => void;
  children?: ReactNode;
  showModal: "open" | "hide" | "close";
  runFunctions?: boolean;
  id?: string;
  bookmarkId?: string;
  fromUrl?: boolean;
}
