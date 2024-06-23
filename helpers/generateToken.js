import jwt from "jsonwebtoken";

const generateToken = (usuario) => {
  const token = jwt.sign({ usuario }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

export default generateToken;
