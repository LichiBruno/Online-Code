import { useEffect, useState } from 'react'

const prefix = "onlinecode"

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = prefix + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [value, prefixedKey])

  return [value, setValue]
}