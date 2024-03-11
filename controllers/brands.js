const Brand = require('../db/models/brand')

postBrand = async ( req, res ) =>
  {
    const brand = req.body;
    console.log(brand);
    try 
      {
        const newBrand = await Brand.create(brand);
        res.json(newBrand)
      }
    catch (error) 
      {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };

getAllBrands = async (req, res)=>
{
  try 
    {
      const brands = await Brand.findAll();
      res.json(brands)
    }
  catch (error) 
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

deleteBrand = async (req, res)=>
{
  const {id} = req.params;
  try 
    {
      const brands = await Brand.destroy( { where: { id: id } } );
      res.json(brands)
    }
  catch (error) 
    {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { postBrand, getAllBrands, deleteBrand }