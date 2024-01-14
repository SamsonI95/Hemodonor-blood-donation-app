const textflow = require("textflow.js");

textflow.useKey("D2cdTEzMyRW1c5AijkXqQQA3r3QbJk22x0TE717Mcg7nPpGvKFODwWtG1CtWgaEJ");

const sendVerificationCode = async (req, res) => {
  
  const {phone_number} = req.body;

  const verificationOptions = {
    service_name: "Hemo-Donor",
    seconds: 600,
  };

  const result = await textflow.sendVerificationSMS(phone_number, verificationOptions);

  return res.status(result.status).json(result.message);
};

const verifyCode = async (req, res) => {
  const { phone_number, code } = req.body;

  let result = await textflow.verifyCode(phone_number, code);

  if (result.valid) {
    // your server logic
    return res.status(200).json(result.message);
  }
  return res.status(result.status).json(result.message);
};

module.exports = {
  sendVerificationCode,
  verifyCode,
};
