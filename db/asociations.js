const Product = require('./models/product')
const Brand = require('./models/brand')

Brand.hasMany(Product, { foreignKey: 'brandId' });
Product.belongsTo(Brand, { foreignKey: 'brandId' });