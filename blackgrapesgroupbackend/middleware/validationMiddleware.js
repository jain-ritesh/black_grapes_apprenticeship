export const validateUser = (req, res, next) => {
  const { name, email, mobile, userType } = req.body;

  let errors = [];

  if (!name || typeof name !== "string") {
    errors.push("Name is required and must be a string.");
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    errors.push("Valid email is required.");
  }

  if (!mobile || typeof mobile !== "string" || mobile.length !== 10) {
    errors.push("Mobile number must be a 10-digit string.");
  }

  if (!userType || (userType !== "Graduate" && userType !== "Undergraduate")) {
    errors.push("User type must be 'Graduate' or 'Undergraduate'.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
};