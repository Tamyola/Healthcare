const express = require('express');
const router = express.Router();

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