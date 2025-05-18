import { writeHTML } from "./controllerUtils.js";

export default {
    '/': (req, res) => {
        writeHTML('./pages/index.html', res)
    },
    '/home': (req, res) => {
        writeHTML('./pages/index.html', res)
    },
    '/pokemon': (req, res) => {
        writeHTML('./pages/pokemon.html', res)
    }
}