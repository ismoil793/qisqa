import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.NEXTAUTH_SECRET;

export async function verifyJwt(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify JWT with secret key
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded; // Attach the user data to the request
    return next(); // Continue to the next middleware or API route
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export const withJwtVerification = (handler) => {
  return async (req, res) => {
    // Call the verifyJwt function to validate the token first
    await verifyJwt(req, res, () => handler(req, res));
  };
};
