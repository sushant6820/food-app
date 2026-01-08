import User from "../models/userModel.js";

///GET USER INFO

export const getUserCont = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching user",
      error,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const { userName, address, phone } = req.body;

    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in update user API",
      error,
    });
  }
};
