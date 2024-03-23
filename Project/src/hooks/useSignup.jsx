import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (name, email, password, wallet, username, referral) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, username, referral })
        })

        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        else {
            //saving to local storage
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}