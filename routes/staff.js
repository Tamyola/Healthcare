const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
    res.render('staff', {profile});
});

router.get('/employees', async (req, res) => {
    const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
    res.render('staff', {profile});
});

router.post('/create', async (req, res) => {
    try {
        if (req.body.name.length < 1) {
            res.send("name cannot be empty")
        } else{
            await StaffModel.create(req.body)
            const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
            res.render('staff', { profile });
        }
    } catch (error) {
        console.log("error_cached",error)
    }
});

router.post('/create', async (req, res) => {
    if (req.body.department.length < 1) {
        res.send("department cannot be empty")
    } else{
        await StaffModel.create(req.body)
        const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
        res.render('staff', { profile });
    }
});

router.post('/create', async (req, res) => {
    if (req.body.position.length < 1) {
        res.send("position cannot be empty")
    } else{
        await StaffModel.create(req.body)
        const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
        res.render('staff', { profile });
    }
});
  
router.post('/create', async (req, res) => {
    if (req.body.contact.length < 1) {
        res.send("contact cannot be empty")
    } else{
        await StaffModel.create(req.body)
        const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
        res.render('staff', { profile });
    }
});

router.post('/update', async (req, res) => {
    const data = await StaffModel.findById(req.body.id)
    if (!data) {
        res.render('profile does not exist');
    }
    else {
        await StaffModel.findByIdAndUpdate(req.body.id, req.body, {});
        const profile = await StaffModel.find({}).lean().sort({dateCreated: -1});
        res.render("staff", { profile })
    }
});

//router.post('/delete', staffController.delete)







module.exports = router;