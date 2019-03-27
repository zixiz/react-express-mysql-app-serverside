var express = require('express');
var router = express.Router();
var myDbHelper = require('../db/dbhelper');


router.get('/ages', async (req, res) => { 

  var categories = await myDbHelper.pool.query(`SELECT * FROM ages`);
  
  res.json(categories);
  
});

router.post('/costum', async (req, res) => { 

  await myDbHelper.pool.query(`INSERT INTO all_costume (name, image, category_id)
  VALUES ('${req.body.name}','${req.body.img}','${req.body.categoryId}')`);

  res.json({msg:"Added costum!"});
  
});

router.get('/costum', async (req, res) => { 

  let costumes = await myDbHelper.pool.query(`SELECT * FROM all_costume`);

  let categories = await myDbHelper.pool.query(`SELECT * FROM ages`);

  let costumesToSend = costumes.map(c => {

    let currentCattegory = categories.find(category => category.category_id == c.category_id);

    return {costume_id:c.id, costume_name: c.name, image_url: c.image, category_name: currentCattegory.age };
  });

  res.json(costumesToSend);
  
});

module.exports = router;
