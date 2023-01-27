import { useEffect, useState, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useShowDropDown(initialvisible) {

  const [isOpen, setIsOpen] = useState(initialvisible);
  const ref = useRef(null)

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    // Bind the event listener
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { ref, isOpen, setIsOpen};
}

export default useShowDropDown;

//Fandt det her fra stackoverflow - https://stackoverflow.com/questions/32553158/detect-click-outside-react-component?answertab=votes#tab-top
