"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = required("express").Router();

const { BlogPost } = require("../controllers/blogController.js");

// ------------------------------------------
// BlogPost
// ------------------------------------------
router.route("/post")
    .get(BlogPost.list)
    .post(BlogPost.create);

router.route("/post/:postId")
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete);

module.exports = router;
