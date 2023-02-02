const { body } = require('express-validator');

const storeValidations = [
    body('name').notEmpty().withMessage('El campo nombre es requerido'),
    body('color').notEmpty().withMessage('El campo color es requerido'),
    body('email').isEmail().withMessage('El formato de email no es valido').notEmpty().withMessage('El campo nombre es requerido'),
    body('age').optional().isNumeric().withMessage('La edad debe ser un numero')
];

module.exports = storeValidations;