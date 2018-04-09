var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.gitub.com/users/daniloagostinho');
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

// Promises nao iram influenciar no codigo do javascript

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/daniloagostinho');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status = 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisicao!')
                }
            }
        }
    });
};

minhaPromise()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });
