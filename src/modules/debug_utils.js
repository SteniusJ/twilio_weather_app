require('dotenv').config();

const debug_messages = Boolean(Number(process.env.DEBUG_MESSAGES)) || false;

const log = (message) => {
    if (debug_messages) console.log(message);
}

module.exports = { log };
