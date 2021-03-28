const jwt = require('jsonwebtoken')

const user = {
    name: "Le Minh Hung",
    id: "12345",
    role: "admin",
}

const secret = "3245665546"

const token = jwt.sign(user, secret, { expiresIn: 3600 });

const payload = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGUgTWluaCBIdW5nIiwiaWQiOiIxMjM0NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxNjg5ODAxNCwiZXhwIjoxNjE2OTAxNjE0fQ.E-yEhsB-4f0whH5-Hwpo_9LFGnqT720ddemGsjpEP0A",
    secret
)

//console.log(token);
console.log(payload);