const User = require('../db/models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {generateToken} = require('../utils/jwt')

createUser = async ( req, res ) =>
{
  try
      {   
      const { username, password, admin } = req.body;

      const plaintextPassword = password;
      const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

      const newUser = await User.create({ username: username, password: hashedPassword, admin: admin });
      res.json(newUser);
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

authenticate = async (req, res) => 
{
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });

      if (!user) {
          return res.status(401).send('User not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
          const token = generateToken({ username: username, admin: user.admin });
          console.log(token);
          res.json({ token });
      } else {
          res.status(401).send('Invalid credentials');
      }
  } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser, authenticate }