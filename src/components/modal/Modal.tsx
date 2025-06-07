"use client";
import "./modal.style.css";

import { useRouter } from "next/navigation";
import { FC, memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { ModalProps } from "./modal.type";

const Modal: FC<ModalProps> = ({
  closeClick,
  children,
  showModal,
  runFunctions = true,
  id = "modal",
  bookmarkId,
  fromUrl,
}) => {
  const [show, setShow] = useState<"open" | "hide" | "close">("open");
  const router = useRouter();
  const clearBookMark = () => {
    if (fromUrl)
      router.replace(window.location.pathname, {
        scroll: false,
      });
    // Remove the bookmark without changing scroll position
    else if (bookmarkId) router.back();
  };
  const containerElement =
    typeof window !== "undefined" ? document?.querySelector("body") : false;
  useEffect(() => {
    if (show == "hide") setTimeout(() => closeClick(), 300);
  }, [closeClick, show]);
  //  this  for make  page not moved when modal open because modal remove body scroll
  useEffect(() => {
    const body = typeof window !== "undefined" && document?.body;
    if (typeof window !== "undefined" && document && body && runFunctions) {
      const scrollBarCompensation =
        window.innerWidth - document.body.offsetWidth;
      body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
      body.style.touchAction = "none";
      (
        body.style as CSSStyleDeclaration & { msTouchAction?: string }
      ).msTouchAction = "none";
    }
    return () => {
      if (typeof window !== "undefined" && body && runFunctions) {
        body.style.overflowY = "auto";
        document.body.style.paddingRight = "0";
        body.style.touchAction = "";
        (
          body.style as CSSStyleDeclaration & { msTouchAction?: string }
        ).msTouchAction = "";
      }
    };
  }, [runFunctions]);
  //bookmark for modal
  useEffect(() => {
    if (bookmarkId) {
      if (showModal === "open") {
        window.location.hash = bookmarkId; // Add bookmark when modal opens
      } else if (showModal === "close") {
        clearBookMark(); // Remove bookmark safely when modal closes
      }
    }
    const handleBack = () => {
      if (showModal === "open") {
        setShow("hide");
      }
    };
    setShow(showModal);
    if (showModal === "hide" || (showModal === "close" && bookmarkId))
      clearBookMark();
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [showModal, bookmarkId]);
  //handle close modal
  const handleClose = () => {
    setShow("hide");
    if (bookmarkId) clearBookMark();
  };
  return (
    //create portal for added this component to the  body  element because this make  modal easy to  use (no z-index  and overflow problems)
    containerElement &&
    createPortal(
      <>
        <article
          className="p-5 grid overflow-auto z-[102] items-center no-scroll max-xs:grid-cols-1 fixed top-0 left-0 h-full w-full cursor-pointer justify-items-center"
          onClick={handleClose}
          id={id}
        >
          <div
            className={`${
              show == "open" ? "scale-in-center-open" : "scale-in-center-close"
            } flex flex-col items-center justify-center relative z-[101] cursor-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </article>

        {/* dark glass background */}
        <div
          className={` ${
            show == "open" ? "fade-open" : "fade-close"
          } z-[101] glass fixed top-0 left-0 h-full w-full`}
          style={{ transform: "scale(1)" }}
        />
      </>,
      containerElement!
    )
  );
};
export default memo(Modal);
