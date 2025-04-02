export const checkISExpiredToken = (token: string) => {
  const decoded = JSON.parse(atob(token.split('.')[1]))
  const currentTime = Date.now() / 1000
  return decoded.exp < currentTime
}

export const getToken = (): string | null => {
  try {
    const token = localStorage.getItem('token')
    if (!token) return null
    const isExpired = checkISExpiredToken(token)
    if (isExpired) {
      localStorage.removeItem('token')
      return null
    }
    return token
  } catch (e) {
    return null
  }
}