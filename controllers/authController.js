const jwt = require('jsonwebtoken')
exports.login = (req, res) => {
    const { username, password } = req.body
    if(username === 'admin' && password === 'admin') {
        const token = jwt.sign({ role: "admin"}, process.env.JWT_SECRET, { expiresIn: 3600 })
        return res.json({ token })
    }
    res.status(401).send()
}