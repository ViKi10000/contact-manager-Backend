const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getcontactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenhandler");

router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getcontactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
