import { useContext, useEffect } from "react";
import { PageContext } from "../PageContext";

function Experience() {
  const { setPageState } = useContext(PageContext)

  useEffect(() => {
    setPageState("experience")
  }, [setPageState])

  return (
    <div>
      Experience Page
    </div>
  )
}

export default Experience;