const { Issue } = require('../models/index');

module.exports = {

    async getIssues(req, res) {
        try {
            const issues = await Issue.findAll();
            if (issues.length > 0) {
                res.status(200).json({ data: issues });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createIssue(req, res) {

        const issue = {
            desc: req.body.desc,
            unitId: req.body.unitId
        };

        await Issue.create(issue)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateIssue(req, res) {

        try {
            Issue.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                       await Issue.update({
                            desc: req.body.desc,
                            unitId: req.body.unitId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
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

    async deleteIssue(req, res) {
        try {
            Issue.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Issue.destroy({
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