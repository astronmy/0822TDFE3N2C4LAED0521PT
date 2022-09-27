import { useEffect } from "react"

export const useAsync = (
  setLoading,
  asyncFn,
  successFn,
  errorFn,
  finallyFn,
  returnFn,
  despendencies = []
) => {

  useEffect(() => {
    setLoading(true)

    asyncFn().then((result) => {
        successFn(result)
    }).catch((error) => {
        if(errorFn){
          errorFn(error)
        }
    }).finally(() => {
        if(finallyFn){
          finallyFn()
        }
        setLoading(false)
    })

    return () => {
      if(returnFn){
        returnFn()
      }
    }

  }, despendencies)

}