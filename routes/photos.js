const express = require("express");
const router = express.Router();
const { photos } = require("../photoDB");

//GET logo
router.get("/logo", async (req, res) => {
  try {
    const logo = photos.logo;
    res.json(logo);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET Slider Photos
router.get("/sliderPhotos", async (req, res) => {
  try {
    const sliderphotos = photos.sliderPhotos;
    res.setHeader("Cache-Control", "max-age=31536000");
    res.status(200).header({ Allowed: true }).send({
      sliderphotos,
    });
  } catch (error) {
    res.send({ message: error });
  }
});

//GET testimonial Photos
router.get("/testimonialPhoto", async (req, res) => {
  try {
    const testimonialBackground = photos.testimonialBackground;
    res.setHeader("Cache-Control", "max-age=31536000");
    res.status(200).header({ Allowed: true }).send({
      testimonialBackground,
    });
  } catch (error) {
    res.send({ message: error });
  }
});

//GET feature Photos
router.get("/featurePhotos", async (req, res) => {
  try {
    const featurePhotos = photos.featurePhotos;
    res.setHeader("Cache-Control", "max-age=31536000");
    res.status(200).header({ Allowed: true }).send({
      featurePhotos,
    });
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
