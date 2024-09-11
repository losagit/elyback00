const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/AuthController');
const courseCtrl = require('../controllers/CourseController');
const degreeCtrl = require('../controllers/DegreeController');
const enrollCtrl = require('../controllers/EnrollController');
const issueCtrl = require('../controllers/IssueController');
const materialCtrl = require('../controllers/MaterialController');
const periodCtrl = require('../controllers/PeriodController');
const ratingCtrl = require('../controllers/RatingController');
const sectionCtrl = require('../controllers/SectionController');
const studentCtrl = require('../controllers/StudentController');
const unitCtrl = require('../controllers/Unitcontroller');

router.post('/api/signin', authCtrl.signIn);
router.post('/api/signup', authCtrl.signUp);

router.get('/api/getcourse', courseCtrl.getCourses);
router.post('/api/createcourse', courseCtrl.createCourse);
router.put('/api/updatecourse', courseCtrl.updateCourse);
router.delete('/api/deletecourse', courseCtrl.deleteCourse);

router.get('/api/getdegree', degreeCtrl.getDegrees);
router.post('/api/createdegree', degreeCtrl.createDegree);
router.put('/api/updatedegree', degreeCtrl.updateDegree);
router.delete('/api/updatedegree', degreeCtrl.deleteDegree);

router.get('/api/getenroll', enrollCtrl.getEnrolls);
router.post('/api/createenroll', enrollCtrl.createEnroll);
router.put('/api/updateenroll', enrollCtrl.updateEnroll);
router.delete('/api/deleteenroll', enrollCtrl.deleteEnroll);

router.get('/api/getissue', issueCtrl.getIssues);
router.post('/api/createissue', issueCtrl.createIssue);
router.put('/api/updateissue', issueCtrl.updateIssue);
router.delete('/api/deleteissue', issueCtrl.deleteIssue);

router.get('/api/getmaterial', materialCtrl.getMaterials);
router.post('/api/creatematerial', materialCtrl.createMaterial);
router.put('/api/updatematerial', materialCtrl.updateMaterial);
router.delete('/api/deletematerial', materialCtrl.deleteMaterial);

router.get('/api/getperiod', periodCtrl.getPeriods);
router.post('/api/createperiod', periodCtrl.createPeriod);
router.put('/api/updateperiod', periodCtrl.updatePeriod);
router.delete('/api/deleteperiod', periodCtrl.deletePeriod);

router.get('/api/getrating', ratingCtrl.getRatings);
router.post('/api/createrating', ratingCtrl.createRating);
router.put('/api/updaterating', ratingCtrl.updateRating);
router.delete('/api/deleterating', ratingCtrl.deleteRating);

router.get('/api/getsection', sectionCtrl.getSections);
router.post('/api/createsection', sectionCtrl.createSection);
router.put('/api/updatesection', sectionCtrl.updateSection);
router.delete('/api/deletesection', sectionCtrl.deleteSection);

router.get('/api/getstudent', studentCtrl.getStudents);
router.post('/api/createstudent', studentCtrl.createStudent);
router.put('/api/updatestudent', studentCtrl.updateStudent);
router.delete('/api/deletestudent', studentCtrl.deleteStudent);

router.get('/api/getunit', unitCtrl.getUnits);
router.post('/api/createunit', unitCtrl.createUnit);
router.put('/api/updateunit', unitCtrl.updateUnit);
router.delete('/api/deletetunit', unitCtrl.deleteUnit);

module.exports = router;