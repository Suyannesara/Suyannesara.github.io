var lsPessoa = JSON.parse(localStorage.getItem("lsPessoa"));
if (lsPessoa == null) {
    lsPessoa = [];
}

function gavar() {
    var pessoa = {};

    pessoa.nome = document.getElementById("nome").value.toUpperCase();
    pessoa.status = document.getElementById("status").value;
    pessoa.local = document.getElementById("local").value;
    pessoa.horaInicio = document.getElementById("horaInicio").value;
    pessoa.inicioPrevisto = document.getElementById("inicioPrevisto").value;
    pessoa.fimPrevisto = document.getElementById("fimPrevisto").value;
    pessoa.saidaPrevista = document.getElementById("saidaPrevista").value;

    var id = document.getElementById("id").value;

    if (id == '') {
        lsPessoa.push(pessoa);
    } else {
        lsPessoa[id] = pessoa;
    }

    localStorage.setItem("lsPessoa", JSON.stringify(lsPessoa));
    atualizarTabela();
    novo();
}

function atualizarTabela() {
    // console.log("atualizarTabela");
    var lsPessoa = JSON.parse(localStorage.getItem("lsPessoa"));
    var corpoTabela = "";
    for (i in lsPessoa) {
        corpoTabela += `<tr onclick="editar(${i})">`;
        corpoTabela += `<td>${lsPessoa[i].nome}</td>`;
        corpoTabela += colunaStatus(lsPessoa[i].status, lsPessoa[i].local);
        corpoTabela += `<td>${lsPessoa[i].horaInicio}</td>`;
        corpoTabela += `<td>${lsPessoa[i].inicioPrevisto}</td>`;
        corpoTabela += `<td>${lsPessoa[i].fimPrevisto}</td>`;
        corpoTabela += `<td>${lsPessoa[i].saidaPrevista}</td>`;
        corpoTabela += `</tr>`;
    }
    // console.log(corpoTabela);
    document.getElementById("corpoTabela").innerHTML = corpoTabela;
}

function colunaStatus(status, local) {
    var retorno = "<td &class>&status &local</td>";
    local = (local == "") ? "" : `(${local})`;
    retorno = retorno.replace("&local", local);
    switch (status) {
        case "operatorio": {
            retorno = retorno.replace("&class", "class='table-warning'")
                .replace("&status", "Pré Operatório");
            break;
        }
        case "sala-cirurgia": {
            retorno = retorno.replace("&class", "class='table-danger'")
                .replace("&status", "Em sala de Cirurgia");
            break;
        }
        case "recuperacao": {
            retorno = retorno.replace("&class", "class='table-success'")
                .replace("&status", "Sala de Recuperação");
            break;
        }
        case "transferido": {
            retorno = retorno.replace("&class", "class='table-primary'")
                .replace("&status", "Trensferído");
            break;
        }
    }
    return retorno;
}



function editar(id) {
    document.getElementById('nome').value = lsPessoa[id].nome;
    document.getElementById("status").value = lsPessoa[id].status;
    document.getElementById("local").value = lsPessoa[id].local;
    document.getElementById("horaInicio").value = lsPessoa[id].horaInicio;
    document.getElementById("inicioPrevisto").value = lsPessoa[id].inicioPrevisto;
    document.getElementById("fimPrevisto").value = lsPessoa[id].fimPrevisto;
    document.getElementById("saidaPrevista").value = lsPessoa[id].saidaPrevista;
    document.getElementById("id").value = id;
}

function apagar() {
    var id = document.getElementById("id").value;
    if (id == '') {
        return;
    }
    if (confirm("Você realmente deseja apagar esse registro?")) {
        lsPessoa.splice(id, 1);
        localStorage.setItem("lsPessoa", JSON.stringify(lsPessoa));
        atualizarTabela();
        novo();
    }
}

function novo() {
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
}

atualizarTabela();


    // status
    // local
    // horaInicio
    // inicioPrevisto
    // fimPrevisto
    // saidaPrevista