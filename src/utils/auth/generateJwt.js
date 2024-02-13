const jsonwebtoken = require("jsonwebtoken");


function generateJwt(user_id, email) {
  return jsonwebtoken.sign(
    {
      evm_address,
      solana_address,
      user_id,
      fid,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
}

module.exports = generateJwt;
