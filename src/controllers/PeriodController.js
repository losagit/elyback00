const { Period } = require('../models/index');

module.exports = {

    async getPeriods(req, res) {
        try {
            const periods = await Period.findAll();
            if (periods.length > 0) {
                res.status(200).json({ data: periods });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createPeriod(req, res) {

        const period = {
            year: req.body.year
        };

        await Period.create(period)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updatePeriod(req, res) {

        try {
            Period.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Period.update({
                            year: req.body.year
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            year: req.body.year
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deletePeriod(req, res) {
        try {
            Period.findAll({ where: { iperiodIdd: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Period.destroy({
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