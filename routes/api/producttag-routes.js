const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/producttags` endpoint

// Read all ProductTags
router.get('/', async (req, res) => {
  try {
    const allData = await ProductTag.findAll({
      // include: [{ model: Product, through: ProductTag, as: 'products_tags' },
      //           { model: Tag, through: ProductTag, as: 'tags_products' }]
    });
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
