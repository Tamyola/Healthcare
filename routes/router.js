const router = require('express').Router();
const { StaffModel } = require('../models/staff');
const { PatientModel } = require('../models/patient');

router.get('/dashboard', (req, res) => {
    res.render('dash');
});

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

router.get('/workers', (req, res) => {
    res.render('staff');
});

router.get('/wardees', (req, res) => {
    res.render('patient');
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

router.get('/sickpersons', async (req, res) => {
    const personnel = await PatientModel.find({}).lean().sort({dateCreated: -1});
    res.render('patient', {personnel});
});

router.post('/createPatient', async (req, res) => {
    console.log("-----------",req.body)
    try {
        if (req.body.name.length < 1) {
            res.send("name cannot be empty")
        } else{

            await PatientModel.create(req.body)
            const personnel = await PatientModel.find({}).lean().sort({dateCreated: -1});
            res.render('patient', { personnel  });
        }
    } catch (error) {
        console.log("error_cached",error)
    }
});

router.post('/createPatient', async (req, res) => {
    if (req.body.dob.length < 1) {
        res.send("dob cannot be empty")
    } else{
        await PatientModel.create(req.body)
        const personnel  = await PatientModel.find({}).lean().sort({dateCreated: -1});
        res.render('patient', { personnel  });
    }
});

router.post('/createPatient', async (req, res) => {
    if (req.body.gender.length < 1) {
        res.send("gender cannot be empty")
    } else{
        await PatientModel.create(req.body)
        const personnel  = await PatientModel.find({}).lean().sort({dateCreated: -1});
        res.render('patient', {personnel  });
    }
});
  
router.post('/createPatient', async (req, res) => {
    if (req.body.contact.length < 1) {
        res.send("contact cannot be empty")
    } else{
        await PatientModel.create(req.body)
        const personnel  = await PatientModel.find({}).lean().sort({dateCreated: -1});
        res.render('patient', { personnel  });
    }
});


router.post('/upgrade', async (req, res) => {
    const data = await PatientModel.findById(req.body.id)
    if (!data) {
        res.render('profile does not exist');
    }
    else {
        await PatientModel.findByIdAndUpdate(req.body.id, req.body, {});
        const personnel = await PatientModel.find({}).lean().sort({dateCreated: -1});
        res.render("patient", { personnel  })
    }
});

//router.post('/delete', patientController.delete)






module.exports = router;