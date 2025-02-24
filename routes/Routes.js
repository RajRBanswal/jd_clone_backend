const express = require("express");
const {
  userRegistration,
  usersLogin,
  getUsers,
} = require("../controllers/UserControler");
const { getAllTalukas } = require("../controllers/SettingsControllers");
const {
  vendorRegistration,
  vendorLogin,
  addListing,
  getListing,
  deleteListing,
} = require("../controllers/VendorControllers");
const {
  adminLogin,
  getCategory,
  addCategory,
  getKeywords,
  addKeywords,
} = require("../controllers/AdminControllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Specify the directory to save images
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Create a unique file name
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
  fileFilter: function (req, file, cb) {
    // Accept only image files (you can customize this if needed)
    const filetypes = /jpeg|jpg|png|gif|mp4|avi|mov|wmv|flv|mkv|webm/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images are allowed."));
    }
  },
});

router.post("/api/users/user-registration", userRegistration);
router.post("/api/users/user-login", usersLogin);
router.get("/api/users/:id", getUsers);

router.get("/api/admin/all-talukas", getAllTalukas);

// Vendor Routes
router.post("/api/vendor/vendor-registration", vendorRegistration);
router.post("/api/vendor/vendor-login", vendorLogin);
router.post(
  "/api/vendor/add-listing",
  upload.fields([
    { name: "uplodImages", maxCount: 20 }, // Allow up to 5 images
    { name: "uplodVideo", maxCount: 5 }, // Allow a single PDF file
  ]),

  addListing
);
router.get("/api/admin/all-listing", getListing);
router.post("/api/vendor/delete-listing", deleteListing);

// Admin Routes
router.post("/api/admin/admin-login", adminLogin);
router.get("/api/admin/get-category", getCategory);
router.post("/api/admin/add-category", addCategory);
router.get("/api/admin/get-keywords", getKeywords);
router.post("/api/admin/add-keywords", addKeywords);

module.exports = router;
