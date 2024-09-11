const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {

    async signIn(req, res) {
        let { email, pwd } = req.body;
        await User.findOne({
            where: {
                email: email
            }
        }).then(user => {

            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {

                if (bcrypt.compareSync(pwd, user.pwd)) {

                    // Creamos el token
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })

                } else {
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }

            }

        }).catch(err => {
            res.status(500).json(err);
        })
    },

    async signUp(req, res) {
        //console.log(req.body.pwd);
        let password = bcrypt.hashSync(req.body.pwd, Number.parseInt(authConfig.rounds));
        //console.log(password);

        await User.create({
            name: req.body.name,
            email: req.body.email,
            pwd: password
        }).then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });
        }).catch(err => {
            res.status(500).json(err);
        })
    }

}