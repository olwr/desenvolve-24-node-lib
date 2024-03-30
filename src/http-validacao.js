import { warningColor } from "./index.js";

function linksExtraction(arrLinks) {
    return arrLinks.map((linkObject) => Object.values(linkObject).join());
};

async function checkStatus(arrURLs) {
    const arrStatus = await Promise.all(
        arrURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
            } catch (err) {
                return errorHandling(err);
            }
        })
    )
    return arrStatus;
};

function errorHandling(err) {
    if (err.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu um erro'
    }
}

export default async function validatedList(list) {
    const links = linksExtraction(list);
    const status = await checkStatus(links);
    return list.map((obj, i) => ({
        ...obj,
        status: status[i]
    }));
};