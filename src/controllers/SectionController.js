const { Section, Degree } = require('../models/index');

module.exports = {

    async getSections(req, res) {
        try {
            const sections = await Section.findAll({
                include: [{
                    model: Degree,
                    as: "degrees"
                }]
            });
            if (sections.length > 0) {
                res.status(200).json({ data: sections });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createSection(req, res) {

        const section = {
            desc: req.body.desc,
            degreesId: req.body.degreesId
        };
        await Section.create(section)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateSection(req, res) {

        try {
            Section.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Section.update({
                            desc: req.body.desc,
                            degreesId: req.body.degreesId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
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

    async deleteSection(req, res) {
        try {
            Section.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Section.destroy({
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