const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {

    console.log(req.body)

//   try {
//     const options = {
//       amount: 50000, // ₹500 → amount in paise
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);

//     res.status(200).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
};


const verifyPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    const payment = await razorpay.payments.fetch(paymentId);

    if (payment.status === "captured") {
      return res.status(200).json({
        success: true,
        message: "Payment successful",
        payment,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Payment not completed",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {createOrder ,verifyPayment}