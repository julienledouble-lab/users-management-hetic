export function json(res, status, data) {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}
/*chaque fois qu'on veut envoyer une réponse json, on peut utiliser cette fonction pour éviter de répéter le même code à chaque fois.*/ 

