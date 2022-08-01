import jwt from 'jsonwebtoken'

const checkAuth = {
    verifyUser: (req, res, next) => {
        const token = req.headers['auth-token']
        if (!token) {
            return res.status(400).send({ error: "Please login" });
        }
        if (token) {
            try {
                const user = jwt.decode(token)
                req.user = user;
                next();
            } catch (error) {
                return res.status(401).send({ error: "Invalid Token" });
            }
        }
    },
};

export default checkAuth;