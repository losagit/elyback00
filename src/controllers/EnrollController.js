const { where } = require('sequelize');
const { Enroll, Student, Course, Degree, Period } = require('../models/index');

module.exports = {

    async getEnrolls(req, res) {
        try {
            const enrolls = await Enroll.findAll({
                include: [
                    {
                        model: Student,
                        as: 'students'
                    },
                    {
                        model: Course,
                        as: 'courses'
                    },
                    {
                        model: Degree,
                        as: 'degrees'
                    },
                    {
                        model: Period,
                        as: 'periods'
                    },
                ]
            });
            if (enrolls.length > 0) {
                res.status(200).json({ data: enrolls });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createEnroll(req, res) {

        const enroll = {
            desc: req.body.desc,
            studentsId: req.body.studentsId,
            coursesId: req.body.coursesId,
            periodsId: req.body.periodsId,
            degreesId: req.body.degreesId
        };

        await Enroll.create(enroll)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateEnroll(req, res) {

        try {
            Enroll.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Enroll.update({
                            desc: req.body.desc,
                            studentsId: req.body.studentsId,
                            coursesId: req.body.coursesId,
                            periodsId: req.body.periodsId,
                            degreesId: req.body.degreesId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
                            studentsId: req.body.studentsId,
                            coursesId: req.body.coursesId,
                            periodsId: req.body.periodsId,
                            degreesId: req.body.degreesId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteEnroll(req, res) {
        try {
            Enroll.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Enroll.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.id }
                        });
                        res.status(200).json({
                            message: "estudiante eliminado"
                        })
                    } else {
                        res.status(500).json({ message: "eliminacion fallida" });
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    }

}