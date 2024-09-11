const { Degree } = require('../models/index');

module.exports = {
    
    async getDegrees(req, res) {
        try {
            const degrees = await Degree.findAll();
            if (degrees.length > 0) {
                res.status(200).json({ data: degrees });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createDegree(req,res){

        const degree = {
            desc:req.body.desc
        };

        await Degree.create(degree)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error mientras se guardaba"
            })
        })
    },

    async updateDegree(req, res){

        try{
            Degree.findAll({ where: { id: req.body.id }})
            .then(async (result) => {
                if( result.length > 0){
                    await Degree.update({
                        desc: req.body.desc
                    },
                    {
                        where: { id: req.body.id }
                    });
                    res.status(200).json({
                        message: "actualizacion correcta",
                        desc: req.body.desc
                    })
                }else{
                    res.status(500).json({ message: "actualizacion fallida" })
                }
            })
        } catch( err) {
            res.status(404).json({ message: err });
        }
    },

    async deleteDegree(req,res){
        try{
            Degree.findAll({ where: { id: req.body.id }})
            .then(async (result) => {
                if( result.length > 0){
                    await Degree.destroy({
                        message: "eliminacion correcta",
                        where: { id: req.body.id }
                    });
                    res.status(200).json({
                        message: "curso eliminado"
                    })
                }else{
                    res.status(500).json({ message: "eliminacion fallida" });
                }
            })
        } catch( err) {
            res.status(404).json({ message: err });
        }
    }

}