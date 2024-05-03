// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id', // This specifies the foreign key column in the Products table
  onDelete: 'CASCADE' // This ensures that if a category is deleted, associated products are also deleted
});

Category.hasMany(Product, {
  foreignKey: 'category_id' // This specifies the foreign key column in the Products table
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id' // This specifies the foreign key column in the ProductTags table referencing Products
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id' // This specifies the foreign key column in the ProductTags table referencing Tags
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};