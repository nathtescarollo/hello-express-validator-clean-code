const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');

const validators = require('../validators');
const { nomeValidator, idadeValidator, telefoneValidator } = validators;

router.post('/', [nomeValidator, idadeValidator, telefoneValidator]);

module.exports = router;
