import { useState } from "react";

function useFlip() {
   const [value, setValue] = useState(true);
   const flip = () => {
      setValue(isFacingUp => !isFacingUp);
   };

   return [value, flip];
}

export default useFlip;