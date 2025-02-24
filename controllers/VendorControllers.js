const Listings = require("../models/listingSchema");
const Vendors = require("../models/vendorSchema");

exports.vendorRegistration = async (req, res) => {
  try {
    const result = await Vendors.create({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      address: "",
    });
    if (result) {
      res.json({
        status: 201,
        message: "Vendor created successfully",
      });
    } else {
      res.json({ status: 422, message: error });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};
exports.vendorLogin = async (req, res) => {
  try {
    const result = await Vendors.find({
      $or: [{ mobile: req.body.username }, { email: req.body.username }],
    });
    console.log(result);

    if (result) {
      if (result[0].password === req.body.password) {
        res.json({
          status: 201,
          message: "Vendor logged in successfully",
          data: result[0],
        });
      } else {
        res.json({
          status: 422,
          message: "Invalid Password",
        });
      }
    } else {
      res.json({
        status: 422,
        message: "Invalid Username",
      });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};

exports.addListing = async (req, res) => {
  try {
    let files = [];
    let videos = [];
    // const image = req.files || [];
    const image = req.files["uplodImages"] || [];
    const video = req.files["uplodVideo"] || [];
    // Collect image filenames
    for (let i = 0; i < image.length; i++) {
      files.push(image[i].filename);
    }
    // Collect image filenames
    for (let i = 0; i < video.length; i++) {
      videos.push(video[i].filename);
    }

    const result = await Listings.create({
      adminName: req.body.adminName || "",
      adminId: req.body.adminId || "",
      vendorName: req.body.vendorName || "",
      vendorId: req.body.vendorId || "",
      category: req.body.category,
      title: req.body.title,
      mobile: req.body.mobile,
      whatsappMobile: req.body.whatsappMobile,
      taluka: req.body.taluka,
      district: req.body.selectedDistrict,
      location: req.body.location,
      openingHour: req.body.openingHour,
      yearOfExperience: req.body.yearOfExperience,
      uplodImages: files,
      uplodVideos: videos,
      priceList: req.body.priceList,
      segment: req.body.segment,
      packagesOffered: req.body.packagesOffered,
      seatingCapacity: req.body.seatingCapacity,
      services: req.body.services,
      rentalType: req.body.rentalType,
      cabSeaterCapacity: req.body.cabSeaterCapacity,
      brands: req.body.brands,
      rating: "3.0",
    });

    if (result) {
      res.json({
        status: 201,
        message: "Listing added successfully",
      });
    } else {
      res.json({ status: 422, message: "Listing not added" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: 422, message: error });
  }
};

exports.getListing = async (req, res) => {
  try {
    const result = await Listings.find();
    if (result) {
      res.json({
        status: 201,
        message: "Data found",
        data: result,
      });
    } else {
      res.json({ status: 422, message: "Data not found" });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};
exports.deleteListing = async (req, res) => {
  try {
    const result = await Listings.findByIdAndDelete({ _id: req.body.id });
    if (result) {
      res.json({
        status: 201,
        message: "Listing deleted successfully",
      });
    } else {
      res.json({ status: 422, message: "Data not found" });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};
