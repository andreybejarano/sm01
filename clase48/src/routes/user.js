const express = require('express');
const path = require('path');
const multer = require('multer');

const userController = require('../controllers/userController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../public/img/user');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const upload = multer({
    storage
});

router.get('/', userController.list);
router.get('/register', userController.register);
router.post('/register', upload.single('avatar'), userController.create);
router.get('/login', userController.login);
router.post('/login', userController.loginProcess);

module.exports = router;