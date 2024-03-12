const Product = require('../db/models/product');

postProduct = async ( req, res ) =>
{
  try
  {
      const product = req.body;
      const newProduct = await Product.create(product);
      res.json(newProduct);
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

getAllProducts = async ( req, res ) =>
{
  try
    {
      const allProducts = await Product.findAll();
      res.json(allProducts);
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

getProduct = async (req, res) =>
{
  try
    {
      const {id} = req.params;
      const product = await Product.findOne({ where : { id: id } })
      res.json(product)
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

updateProduct = async (req, res) =>
{    
  try
    {
      const {id} = req.params
      const updates = req.body;
      const product = await Product.update(updates, { where: { id: id } })

      res.json(product)
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

delete_product = async (req, res) =>
{
  try
    {
      const {id} = req.params;
      const product = await Product.destroy({ where : { id: id } })

      res.json( product )
    }
  catch (error)
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {postProduct, getAllProducts, getProduct, updateProduct, delete_product }