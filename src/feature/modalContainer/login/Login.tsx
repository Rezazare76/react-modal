"use client";
import { memo, useContext } from "react";

import { ModalsContainerContext } from "../modalContainer.store";

const Login = () => {
  const { setShowModal } = useContext(ModalsContainerContext);

  return (
    <>
      <button
        className="bg-red-500 m-auto text-white w-[160px] rounded-sm py-2  cursor-pointer self-end "
        onClick={() => setShowModal("hide")}
      >
        close login modal
      </button>
    </>
  );
};

export default memo(Login);
