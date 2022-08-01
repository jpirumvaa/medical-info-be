export default function permit(allowed) {
    const isAllowed = usertype => allowed.includes(usertype);

    return (req, res, next) => {
        if (req.user && isAllowed(req.user.usertype))
            next();
        else
            res.status(403).json({ message: "Forbidden" });
    }
}