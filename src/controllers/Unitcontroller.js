const { Unit } = require('../models/index');

module.exports = {

    async getUnits(req, res) {
        try {
            const units = await Unit.findAll();
            if (units.length > 0) {
                res.status(200).json({ data: units });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createUnit(req, res) {

        const unit = {
            name: req.body.name,
            courseId: req.body.courseId
        };

        await Unit.create(unit)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateUnit(req, res) {

        try {
            Unit.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Unit.update({
                            name: req.body.name,
                            courseId: req.body.courseId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            courseId: req.body.courseId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteUnit(req, res) {
        try {
            Unit.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Unit.destroy({
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

}