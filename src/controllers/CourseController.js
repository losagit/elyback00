const { Course } = require('../models/index');
const ctrl = {};

ctrl.getCourses = async function (req, res) {
    try {
        const courses = await Course.findAll();
        if (courses.length > 0) {
            res.status(200).json({ data: courses });
        } else {
            res.status(200).json({ data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

ctrl.createCourse = async function (req, res) {
    try {
        const course = {
            name: req.body.name
        };
        await Course.create(course)
            .then(data => {
                res.send(data);
            })
    } catch (err) {
        res.status(500).json({
            message: err.message || "Ocurrio un error mientras se guardaba"
        })
    }
},

    ctrl.updateCourse = async function (req, res) {

        try {
            Course.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Course.update({
                            name: req.body.name
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    ctrl.deleteCourse = async function (req, res) {
        try {
            Course.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Course.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.id }
                        });
                        res.status(200).json({
                            message: "curso eliminado"
                        })
                    } else {
                        res.status(500).json({ message: "eliminacion fallida" });
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    }

module.exports = ctrl;