"use client";
import Image from "next/image";
import { lazy, memo, Suspense, useEffect, useState } from "react";

import Modal from "@/components/modal/Modal";

import { ModalsContainerContext } from "./modalContainer.store";
import {
  modalsContainerSectionsType,
  modalsContainerType,
} from "./modalContainer.type";

const Login = lazy(() => import("./login/Login"));
const SignUp = lazy(() => import("./signUp/SignUp"));
const ModalsContainer = ({
  sectionProps,
  setSectionProps,
}: modalsContainerType) => {
  const [section, setSection] =
    useState<modalsContainerSectionsType>(sectionProps);
  const [showModal, setShowModal] = useState<"open" | "hide">("open");

  const sections = {
    login: <Login />,
    "sign-up": <SignUp />,
  };
  const closeClick = () => {
    setSectionProps(null);
  };
  useEffect(() => {
    setSection(sectionProps);
  }, [sectionProps]);

  return (
    <Modal
      closeClick={closeClick}
      showModal={showModal}
      runFunctions
      bookmarkId={`modal-container-${section}`}
    >
      <div className="bg-white flex flex-col w-[300px] rounded-2xl h-[300px]">
        <button
          className="m-[10px] cursor-pointer self-end"
          onClick={() => setShowModal("hide")}
        >
          <Image
            src="/close-line.svg"
            width={30}
            height={30}
            alt="close icon"
          />
        </button>

        <ModalsContainerContext.Provider
          value={{
            setShowModal: setShowModal,
            setSection,
            showModal: showModal,
          }}
        >
          <section className="w-full flex flex-col items-center justify-center grow">
            <Suspense>{section && sections[section]}</Suspense>
          </section>
        </ModalsContainerContext.Provider>
      </div>
    </Modal>
  );
};

export default memo(ModalsContainer);
