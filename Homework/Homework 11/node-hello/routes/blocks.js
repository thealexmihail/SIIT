const { response } = require('express');
const express = require('express')
const router = express.Router();

const blocks = [{
    id: 'fixed',
    description: 'Fastened securely in position'
}, {
    id: 'movable',
    description: 'Capable of being moved'
}, {
    id: 'rotating',
    description: 'Moving in a circle around its center',
    delete: '<i class="fas fa-minus-circle"></i>' | 'Delete'
}];

// list
router.get('/', (req, res) => {
    res.json(blocks);
});
// read
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // const { type } = req.query;
    const block = blocks.filter(block => block.id === id)[0];
    if (!block) {
        res.status(404).json('No block found');
    }
    res.json(block)
});

//create
router.post('/', (req, res) => {
    const newBlock = req.body;
    res.status(201).json(newBlock);
    blocks.push(newBlock);
});

//update 
router.put('/:id', (req, res) => {
    const { id } = req.params;

});

//delete 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const block = blocks.filter(block => block.id !== id)[0];
    blocks.splice(block, 1);
    res.status(200).json(blocks);
});

module.exports = router;
