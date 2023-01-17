const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// NATURE INDEX
// router.get("/", blogController.nature_index);

// // NATURE DETAILS

// router.get("/:id", blogController.nature_details);

// BLOG INDEX
router.get("/", blogController.blog_index);

// ADD BLOG
router.post("/", blogController.blog_add);

// CREATE BLOG POST
router.get("/create", blogController.blog_create);

// GET BLOG DETAILS BY ID
router.get("/:id", blogController.blog_details);

// DELETE A BLOG BY ID
router.delete("/:id", blogController.blog_delete);

module.exports = router;
