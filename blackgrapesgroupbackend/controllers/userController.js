import { UserGraduate } from "../models/UserGraduate.js";
import { UserUndergraduate } from "../models/UserUndergraduate.js";
import sendEmail from "../utils/sendEmail.js";

// Rest of the code remains the same

export const createUser = async (req, res) => {
  try {
    const { name, email, mobile, userType } = req.body;

    let errors = [];

    // Check Email
    const emailExistsGraduate = await UserGraduate.findOne({ email });
    const emailExistsUndergraduate = await UserUndergraduate.findOne({ email });
    if (emailExistsGraduate || emailExistsUndergraduate) {
      errors.push("Email already exists. Please use a different email.");
    }

    // Check Mobile
    const mobileExistsGraduate = await UserGraduate.findOne({ mobile });
    const mobileExistsUndergraduate = await UserUndergraduate.findOne({ mobile });
    if (mobileExistsGraduate || mobileExistsUndergraduate) {
      errors.push("Mobile number already exists. Please use a different number.");
    }

    // If any errors exist, return them
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    let newUser;

    // Store user based on userType
    if (userType === "Graduate") {
      newUser = await UserGraduate.create({ name, email, mobile, userType });
    } else if (userType === "Undergraduate") {
      newUser = await UserUndergraduate.create({ name, email, mobile, userType });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid userType. Please use 'Graduate' or 'Undergraduate'.",
      });
    }

    // Send email to admin
    await sendEmail(newUser);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};