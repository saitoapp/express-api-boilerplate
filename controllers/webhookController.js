const config = require('../config');
const log = require('../lib/common/log.js')

class webhookController {
    tokenVerification(req, res) {
        if (req.query["hub.verify_token"] === config.verify_token) {
            return res.status(200).send(req.query["hub.challenge"]);
        } else {
            log.error('Wrong token provided');
            return res.status(500).send('Wrong token');
        }
    }
}

const webhook = new webhookController();
export default webhook;