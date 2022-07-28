const { nanoid } = require("nanoid");

const setUser = (req, res, next) => {
  try {
    const cookies = req.cookies;
    if (!cookies.userId) {
      res.cookie('userId', nanoid(), { maxAge: 1000 * 3600 * 24 * 31, httpOnly: true });
    }
    return res.status(200).json();
  }
  catch (e) {
    return next(e);
  }
}
module.exports = { setUser };
