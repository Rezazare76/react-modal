"use client";
import Image from "next/image";
import { lazy, Suspense, useState } from "react";

import ModalsContainer from "@/feature/modalContainer/ModalContainer";
import { modalsContainerSectionsType } from "@/feature/modalContainer/modalContainer.type";

const Modal = lazy(() => import("@/components/modal/Modal"));
export default function Home() {
  //state for show modal
  const [showRegularModal, setShowRegularModal] = useState<
    "open" | "hide" | null
  >(null);
  //state for show modalContainer
  const [showModalContainer, setShowModalContainer] =
    useState<modalsContainerSectionsType>(null);
  return (
    <>
      <section className="h-screen grid lg:grid-cols-3 items-center justify-items-center max-w-[1024px] mx-auto pt-5 px-5">
        <article className="bg-white w-full min-[350px]:w-[300px] h-[300px] rounded-2xl flex flex-col items-center justify-center shadow-[0_5px_43px_-12px_#00000040] inset-shadow-sm inset-shadow-transparent hover:inset-shadow-amber-300  transition-all border-b-8 border-amber-300 duration-500">
          <button
            className="bg-amber-300 w-[124px] rounded-lg h-10 text-white cursor-pointer active:scale-95 transition-all"
            title="open regular modal"
            onClick={() => setShowRegularModal("open")}
          >
            modal
          </button>
        </article>

        <article className="bg-white w-full min-[350px]:w-[300px] h-[300px] rounded-2xl flex flex-col items-center justify-center shadow-[0_5px_43px_-12px_#00000040] inset-shadow-sm inset-shadow-transparent hover:inset-shadow-amber-700  transition-all border-b-8 border-amber-700   duration-500">
          <button
            className="bg-amber-700 w-[124px] rounded-lg h-8 text-white cursor-pointer active:scale-95 transition-all"
            title="open login modal"
            onClick={() => setShowModalContainer("login")}
          >
            Login
          </button>
        </article>

        <article className="bg-white w-full min-[350px]:w-[300px] h-[300px] rounded-2xl flex flex-col items-center justify-center shadow-[0_5px_43px_-12px_#00000040] inset-shadow-sm inset-shadow-transparent hover:inset-shadow-emerald-500 transition-all border-b-8 border-b-emerald-500    duration-500">
          <button
            className="bg-emerald-500 w-[124px] rounded-lg h-8 text-white cursor-pointer active:scale-95 transition-all"
            title="open sign up modal"
            onClick={() => setShowModalContainer("sign-up")}
          >
            Sign Up
          </button>
        </article>
      </section>
      {/* regular modal */}
      {showRegularModal && (
        <Suspense>
          <Modal
            closeClick={() => setShowRegularModal(null)}
            showModal={showRegularModal}
            bookmarkId="modal-regular"
          >
            <div className="bg-white flex flex-col w-[80vw] min-[350px]:w-[300px] rounded-2xl h-[300px]">
              <button
                className="  m-[10px]  cursor-pointer self-end "
                onClick={() => setShowRegularModal("hide")}
              >
                <Image
                  src="/close-line.svg"
                  width={30}
                  height={30}
                  alt="close icon"
                />
              </button>
              <div className="w-full grow flex">
                <button
                  className="bg-red-500 m-auto text-white w-[100px] rounded-sm py-2  cursor-pointer self-end "
                  onClick={() => setShowRegularModal("hide")}
                >
                  close
                </button>
              </div>
            </div>
          </Modal>
        </Suspense>
      )}
      {/* modalContainer */}
      {showModalContainer && (
        <Suspense>
          <ModalsContainer
            sectionProps={showModalContainer}
            setSectionProps={setShowModalContainer}
          />
        </Suspense>
      )}
    </>
  );
}
