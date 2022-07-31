export default class WelcomeController {
    static welcome(req, res) {
        return res.send({ message: "Welcome" })
    }
}