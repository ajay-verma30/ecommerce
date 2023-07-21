const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/users'); 

router.post('/registration', async (req, res) => {
  try {
    const { uname, email, password, phone } = req.body;

    const alreadyUser = await Users.findOne({ email });
    if (alreadyUser) {
      return res.status(401).send('The email already exists');
    } else {
      const createdAt = Date.now();
      const hashPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign(
        { id: Users._id, email }, 
        process.env.SECRET_KEY,
        {
          expiresIn: '2h',
        }
      );

      const newUser = new Users({
        uname,
        email,
        password: hashPassword,
        phone,
        token,
        createdAt,
      });

      await newUser.save();
      Users.password = undefined
      res.status(201).send({token, uname, email});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during registration');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const alreadyUser = await Users.findOne({ email });

    if (!alreadyUser) {
      return res.status(402).send("There is no User with such email");
    }

    const isPasswordValid = await bcrypt.compare(password, alreadyUser.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { email: alreadyUser.email },
        process.env.SECRET_KEY,
        { expiresIn: '2h' }
      );

      const uname = alreadyUser.uname;

      const options = {
        expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
        httpOnly: true
      };

      return res.status(200).cookie("token", token, options).json({
        success: true,
        token: token,
        uname: uname
      });
    } else {
      return res.status(400).send("Invalid Password");
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
