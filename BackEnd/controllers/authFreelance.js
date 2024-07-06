
const { Freelance } = require('../orm'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validateSignIn=require('../validation/login')
require('dotenv').config();

const authController = {
//signup the freelancer 
  register: async (req, res) => {
    const { name, email, password, adress, phoneNumber, imageUrl } = req.body; 

    try {
  
      const existingUser = await Freelance.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

   
      const newUser = await Freelance.create({
        name,
        email,
        password: hashedPassword,
        adress,
        phoneNumber,
        imageUrl,
      });


      res.status(201).json({ message: "success"});
    } catch (error) {
      
      console.error('Error in registration:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  },
//signin the freelancer 
    login: async (req, res) => {
    const { errors, isValid } = validateSignIn(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    try {
      const user = await Freelance.findOne({ where: { email: req.body.email } });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id:user.id,
        name:user.name,
        email:user.email, 
        role:'freelancer'
             }, process.env.JWT_SECRET || 'shhhhh', { expiresIn: '1h' });

      return res.status(200).json({
        message: 'success',
        token: `Bearer ${token}`,
        role:'freelancer'
      });
    } catch (error) {
      console.error('Error in login:', error);
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
module.exports = authController;