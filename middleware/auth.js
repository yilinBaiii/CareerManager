import { StatusCodes } from 'http-status-codes'
import { APIError } from '../controllers/authController.js'

import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new APIError('Authentication invalid'), StatusCodes.UNAUTHORIZED;
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new APIError('Authentication invalid', StatusCodes.UNAUTHORIZED);
  }
};

export default auth;