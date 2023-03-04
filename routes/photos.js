const express = require("express");
const router = express.Router();
const { photos } = require("../photoDB");


//GET logo
router.get("/logo", async (req, res) => {
  try {
    const logo = photos.find(item => item.name === "logo");
    res.json(logo);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET Slider Photos
router.get("/sliderPhotos", async (req, res) => {
  try {
    const sliderphotos = photos.filter(item=>item.name!=="logo")
    res.status(200).header({ Allowed: true }).send({
      sliderphotos
    });
  } catch (error) {
    res.send({ message: error });
  }
});



module.exports = router;
