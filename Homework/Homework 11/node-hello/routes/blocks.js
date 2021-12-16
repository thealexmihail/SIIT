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
    const description = req.body;
    const newid = req.body;

    const block = blocks.filter(block => block.id === id)[0];
    if (!block) {
        res.status(404).json('No block found');
    }

    const newBlock = blocks.map((block) => {
        if (block.id === id) {
            block.id = newid
            block.description = description
        }
        return block;
    })
    res.status(201).json(newBlock);

    // id = $.extend(id, req.body);
    // id.save(function (err) {
    //     if (err) {
    //         return res.send('/:id', {
    //             errors: err.errors,
    //             id: id
    //         })
    //     } else {
    //         res.jsonp(id);
    //     }
    // });
    // const blocks = new Blocks({
    //     id: req.body.id,
    //     description: req.body.description
    // });
    // newBlock.id = req.body.id;
    // newBlock.description = req.body.description;

    // let query = { _id: req.params.id }

    // console.log(newBlock);

    // Blocks.findOneAndUpdate(id, blocks, function (err) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         res.status(201).json(newBlock);
    //     }
    // })


    // blocks.id = id;
    // res.json(blocks);
    // const updatedBlock =
    //     res.status(201).json(updatedBlock);

});

//delete 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const block = blocks.filter(block => block.id !== id)[0];
    blocks.splice(block, 1);
    res.status(200).json(blocks);
});

module.exports = router;
