const { check } = require('express-validator');

exports.nomeValidator = check('nome').notEmpty().withMessage('O nome é requerido');
exports.idadeValidator = check('idade').isInt().withMessage('A idade é requerida');
exports.telefoneValidator = check('telefone').matches(/[(][0-9]{2}[)]\s[0-9]{4}[-][0-9]{4}/).withMessage('O formato do telefone está incorreto');