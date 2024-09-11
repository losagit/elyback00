const { Student } = require('../models/index');

module.exports = {

    async getStudents(req, res) {
        try {
            const students = await Student.findAll();
            if (students.length > 0) {
                res.status(200).json({ data: students });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createStudent(req, res) {

        const student = {
            name: req.body.name,
            dni: req.body.dni,
            datebirth: req.body.datebirth,
            gender: req.body.gender
        };

        await Student.create(student)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateStudent(req, res) {

        try {
            Student.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Student.update({
                            name: req.body.name,
                            dni: req.body.dni,
                            datebirth: req.body.datebirth
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            dni: req.body.dni,
                            datebirth: req.body.datebirth
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteStudent(req, res) {
        try {
            Student.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Student.destroy({
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