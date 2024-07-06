const {Client} = require("../orm")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const ValidateRegister = require("../validation/Register");
const validateSignIn = require("../validation/SignIn")
require("dotenv").config();
// signUp for the Client
const Register = async (req, res) => {
try {

    const { name, email, password, adress, phoneNumber, imageUrl } = req.body;
    const hash = bcrypt.hashSync(password, 10)//hashed password
   const HachedPassword = hash;
    await Client.create({ name, email, password:HachedPassword, adress, phoneNumber, imageUrl });
    res.status(200).json({ message: "success" });

    }
 catch (error) {
      res.status(404).json(console.log(error));
    }}
   
   
    // signIn for client
 const SignIn = async (req,res)=>{
     if(!req.body.email || !req.body.password){
     return res.status(400).json({ error: "username and password are required" });
     }
     try {
      const user = await Client.findOne({where:{email:req.body.email}})
      if (!user) {
        // If user is not found
        return res.status(400).json({ error: "User not found. Please sign up." });
      }
      const isMatch = await bcrypt.compare(req.body.password,user.password)
      if(!isMatch){
        return res.status(400).json({ error: "Wrong Password" });
      }
      const token = jwt.sign(
        {
          id: user.id,
          name:user.name,
          email: user.email,
          role:'client'
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({
        message: "success",
        token: "Bearer " + token,
        role:"client"
      });

  
  } catch (error) {
   console.log(error);
    res.status(404).send(error);
  }

    }
  
module.exports = {Register , SignIn}