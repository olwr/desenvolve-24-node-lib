import fs from 'fs';
import fetchFile from "./index.js";
import validatedList from './http-validacao.js';
import { textColor, warningColor, messageColor } from "./index.js";

const path = process.argv;

async function prints(validate, result, fileName = '') {
    if (validate) {
        console.log(messageColor('lista validada: '), textColor(fileName), await validatedList(result));
    } else {
        console.log(messageColor('lista de link: '), textColor(fileName), result);
    }
}

async function processText(args) {
    const path = args[2];
    const validate = args[3] === '--valida';

    try {
        fs.lstatSync(path)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(warningColor('arquivo ou diretório não existe'));
            return;
        }
    };

    if (fs.lstatSync(path).isFile()) {
        const result = await fetchFile(path);
        prints(validate, result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach( async (fileName) => {
            const list = await fetchFile(`${path}/${fileName}`);
            prints(validate, list, fileName);
        })
    };
};

processText(path);