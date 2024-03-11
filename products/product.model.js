const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false }, 
        price: { type: DataTypes.FLOAT, allowNull: false }, 
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        validate: {
            // Define validation rules for each attribute
            nameIsPresent() {
                if (!this.name) {
                    throw new Error('"name" is required');
                }
            },
            priceIsPresent() {
                if (!this.price) {
                    throw new Error('"price" is required');
                }
            },
            quantityIsPresent() {
                if (!this.quantity) {
                    throw new Error('"quantity" is required');
                }
            },
            descriptionIsPresent() {
                if (!this.description) {
                    throw new Error('"description" is required');
                }
            }
        }
    };

    return sequelize.define('Product', attributes, options);
}