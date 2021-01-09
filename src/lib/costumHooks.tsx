import {ChangeEvent, Dispatch, SetStateAction, useCallback} from 'react'
import { updateLanguageServiceSourceFile } from 'typescript'

type UseChangeEvent = {
  (update: Dispatch<SetStateAction<any>>): (event ChangeEvent<HTMLInputElement) => void
}

export const useStringChangeEvent: UseChangeEvent = (update) => {
  return useCallback((event: ChangeEvent<HTMLInputElement>)) => {
    updateLanguageServiceSourceFile(event.target.value)
  }, [update])
}