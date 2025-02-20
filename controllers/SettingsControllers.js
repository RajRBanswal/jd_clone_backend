const Districts = require("../models/DistrictsSchema");
const Talukas = require("../models/TalukasSchema")


exports.getAllTalukas = async (req, res) => {

    const result = await Talukas.find();
    if (result) {
        res.json({ status: 201, result: result });
    } else {
        res.json({ status: 422, result: 'Data not found' });
    }
}