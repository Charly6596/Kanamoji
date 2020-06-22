import { createContainer } from "unstated-next";
import { useState } from "react";

function useSelectMode() {
  const [selecting, setSelecting] = useState(false)
  const toggle = () => {
    setSelecting(!selecting)
  }

  return {toggle, selecting}
}

export const SelectModeContainer = createContainer(useSelectMode);