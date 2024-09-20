const bcrypt = require('bcrypt')
const user = require('../../models/user')
const userController = {}

userController.signin = (req, res) => {
    user.getByEmail(req.mysql, { email: req.body.email }, async (err, data) => {
        try {
            if (err) {
                console.error(err)
                res.status(500).json({
                    message: `Something went really wrong...`
                })
                return
            } else if (data && data.length === 0) {
                res.status(404).json({
                    message: `Not Found`
                })
                return
            }
            const match = await bcrypt.compare(req.body.password, data[0].password);
            if (!match) {
                res.status(400).json({
                    message: `Wrong password`
                })
                return
            }
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.userData = data[0];
                res.status(200).json({
                    message: `Signed In`
                })
            });
        } catch (err) {
            console.error(err)
        }
    })
}

userController.signup = (req, res) => {
    user.getByEmail(req.mysql, { email: req.body.email }, async (err, data) => {
        try {
            if (err) {
                console.error(err)
                res.status(500).json({
                    message: `Something went really wrong...`
                })
                return
            } else if (data && data.length > 0) {
                res.status(409).json({
                    message: `User Exists`
                })
                return
            }

            const passwordHash = await bcrypt.hash(req.body.password, 12);
            user.insert(req.mysql, { username: req.body.username, email: req.body.email, password: passwordHash, is_admin: 1 }, (err, data) => {
                if (err) {
                    console.error(err)
                    res.status(500).json({
                        message: `Something went really wrong...`
                    })
                    return
                }
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.userData = data[1][0];
                    res.status(200).json({
                        message: `Signed Up`
                    })
                });
            })
        } catch (err) {
            console.error(err)
        }
    })
}

module.exports = userController