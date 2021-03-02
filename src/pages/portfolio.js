import { useContext, useEffect } from "react";
import { PageContext } from "../PageContext";

function Portfolio() {
  const { setPageState } = useContext(PageContext)

  useEffect(() => {
    setPageState("portfolio")
  }, [setPageState])

  return (
    <div>
      Portfolio Page
    </div>
  )
}

export default Portfolio;