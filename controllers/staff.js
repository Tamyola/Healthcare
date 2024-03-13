//const StaffModel = require('../models/staff');

module.exports={
    async delete  (req, res)  {
        console.log("delete = ", req.body)
        await StaffModel.findByIdAndDelete(req.body.id)
        const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
        res.render('staff', { profile });
    }
}