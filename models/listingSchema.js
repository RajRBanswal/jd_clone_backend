const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    adminName: String,
    adminId: String,
    vendorName: String,
    vendorId: String,
    category: String,
    title: String,
    mobile: String,
    whatsappMobile: String,
    taluka: String,
    district: String,
    location: String,
    openingHour: String,
    yearOfExperience: String,
    uplodImages: {
      type: [String],
    },
    priceList: {
      type: [String],
    },
    segment: String,
    packagesOffered: String,
    seatingCapacity: String,
    services: String,
    rentalType: String,
    brands: String,
  },
  { timestamps: true }
);

const Listings = mongoose.model("listings", listingSchema);

module.exports = Listings;
