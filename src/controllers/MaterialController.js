const { Material } = require('../models/index');

module.exports = {

    async getMaterials(req, res) {
        try {
            const materials = await Material.findAll();
            if (materials.length > 0) {
                res.status(200).json({ data: materials });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createMaterial(req, res) {

        const material = {
            name: req.body.name,
            file: req.body.file,
            issueId: req.body.issueId
        };

        await Material.create(material)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateMaterial(req, res) {

        try {
            Material.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Material.update({
                            name: req.body.name,
                            file: req.body.file,
                            issueId: req.body.issueId
                        },
                            {
                                where: { id: req.body.id }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            file: req.body.file,
                            issueId: req.body.issueId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteMaterial(req, res) {
        try {
            Material.findAll({ where: { id: req.body.id } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Material.destroy({
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