const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.admin = (req, res, next) => {
  const token = req.headers["x-token"];
  try {
    const payload = jwt.verify(token, secret);
    if (payload.role !== "admin") {
      res.status(401).send();
    }

    req.user = {
        bookName:"Truyen Kieu",
        price:"18000VND",
        author:"Le Minh Hung",
        nxb:"HIT Club"
    };
    next();
  } catch (error) {
    res.status(401).send();
  }
};
