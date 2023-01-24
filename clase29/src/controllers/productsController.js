const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {
			products
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const product = products.find((product) => product.id == id);
		res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		const newProduct = {
			id: products[products.length - 1].id + 1,
			image: 'default-image.png',
			...req.body
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const productToEdit = products.find((product) => product.id == req.params.id);
		res.render('product-edit-form', { productToEdit });
	},
	// Update - Method to update
	update: (req, res) => {
		let indexToEdit;  
		let productToEdit = products.find((product, index) => {
			if (product.id == req.params.id) {
				indexToEdit = index;
				return true;
			}
			return false;
		});
		productToEdit = {
			...productToEdit,
			...req.body
		};
		products[indexToEdit] = productToEdit;
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};

module.exports = controller;