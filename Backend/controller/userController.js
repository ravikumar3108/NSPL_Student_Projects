const User = require("../model/userModel");
const jwt = require("jsonwebtoken")


//USERSIGNuP

const userSignup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password } = req.body;
    const existing = await User.findOne({ email });
    // if (existing) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "user already exist",
    //   });
    // }
    // console.log("user",existing)
    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    const token = jwt.sign({
      userId : user._id
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn : "7D"
    }
  )  

    res.status(201).json({
      success: true,
      message: "Signup successfull",
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

//USERLOGIN

const userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "incorrect password",
      });
    }

     const token = jwt.sign({
      userId : user._id
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn : "7D"
    }
  )  

    res.status(200).json({
      success: true,
      message: "Login successfull",
      token,
      user: {
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

//SINGLEUSER

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL USERS

const getAllUser = async (req, res) => {
  //console.log("getAllUser Api hit");
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { userSignup, userLogin, getSingleUser, getAllUser };
