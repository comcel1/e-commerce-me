const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    // include the product data using the product tag through association
    include: { model: Product, through: ProductTag, as: 'product_tags' },
  })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    include: { model: Product, through: ProductTag, as: 'product_tags' },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
