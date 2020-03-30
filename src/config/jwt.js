import jwt from 'jsonwebtoken'

export const verifyToken = (token) => {
  return jwt.verify(token, 'survplus')
}