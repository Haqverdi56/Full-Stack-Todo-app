const express = require('express');
const { todoController } = require('../controller/todoController');

const router = express.Router()

router.get('/', todoController.getAll)
router.get('/:id', todoController.getById)
router.post('/', todoController.add)
router.delete('/:id', todoController.delete)
router.put('/:id', todoController.update)


module.exports = router