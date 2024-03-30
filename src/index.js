import fs from 'fs';
import chalk from 'chalk';

export const textColor = chalk.hex('#87CEEB'), warningColor = chalk.hex('#DC143C'), messageColor = chalk.hex('#F56E2C');

function errorHandling(err) {
    console.log(warningColor(err))
    throw new Error(warningColor(err.code, 'não há arquivo no diretório'));
}

function linksExtraction(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const catches = [...text.matchAll(regex)];
    const results = catches.map(catches => ({[catches[1]]: catches[2]}))
    return results.length !== 0 ? results : warningColor('não há links no arquivo');
};

/* async and await */
export default async function fetchFile(path) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(path, encoding);
        return linksExtraction(text);
    } catch (err) {
        errorHandling(err)
    } 
};