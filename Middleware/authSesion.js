import jwt from "jsonwebtoken";

const authSesion = async (req, res, next) => {
  const token = req.cookies.secret;

  if (!token) {
    return res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.usuario = decoded.usuario;
    req.query.usuario = decoded.usuario;
    next();
  } catch (error) {
    res.redirect("/login");
  }
};

export default authSesion;
