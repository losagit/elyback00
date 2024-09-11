const { Rating } = require('../models/index');

module.exports = {

    async getRatings(req, res) {
        try {
            const ratings = await Rating.findAll();
            if (ratings.length > 0) {
                res.status(200).json({ data: ratings });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createRating(req, res) {

        const rating = {
            q1: req.body.q1,
            q2: req.body.q2,
            q3: req.body.q3,
            average: req.body.average,
            unitId: req.body.unitId
        };

        await Rating.create(rating)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

   async updateRating(req, res) {

        try {
            Rating.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Rating.update({
                            q1: req.body.q1,
                            q2: req.body.q2,
                            q3: req.body.q3,
                            average: req.body.average,
                            unitId: req.body.unitId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            q1: req.body.q1,
                            q2: req.body.q2,
                            q3: req.body.q3,
                            average: req.body.average,
                            unitId: req.body.unitId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteRating(req, res) {
        try {
            Rating.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Rating.destroy({
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