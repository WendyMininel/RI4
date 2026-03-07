
export class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get EstadoMa() {return this.estado.toUpperCase();}
    get EstadoMin() {return this.estado.toLowerCase();}

    get CidadeMa() {return this.cidade.toUpperCase();}
    get CidadeMin() {return this.cidade.toLowerCase();}

    get RuaMa() {return this.rua.toUpperCase();}
    get RuaMin() {return this.rua.toLowerCase();}

    detalhe() {return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`}
}

export class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get NomeMa() {return this.nome.toUpperCase();}
    get NomeMin() {return this.nome.toLowerCase();}

    get Cpf() {return this.#cpf;}

    get Telefones() {
        let listaT = [];
        for (let telef of this.telefones){
            listaT.push(telef.ddd.toString() + telef.numero.toString());
        }
        return listaT;
    }

    addTelefone(telefone) {this.telefones.add(telefone);}
    
    listarTelefones() {
        let resultado = "";
        for (let tel of this.telefones) {
            resultado += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
        }
        return resultado.trim();
    }

    detalhe() {
        return `Nome: ${this.nome}\n` +
               `${this.endereco.detalhe()}\n` +
               `${this.listarTelefones()}`;
    }
}

export class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()  
        this.telefones = new Set()
    }

    get RazaoSocialMa() {return this.razaoSocial.toUpperCase();}
    get RazaoSocialMin() {return this.razaoSocial.toLowerCase();}
    
    get NomeFantasiaMa() {return this.nomeFantasia.toUpperCase();}
    get NomeFantasiaMin() {return this.nomeFantasia.toLowerCase();}

    get cnpj() {return this.#cnpj;}

    get Clientes() {
        let lista = [];
        for (let c of this.clientes) {
            lista.push(c.nome);
        }
        return lista;
    }

    get Telefones() {
        let lista = [];
        for (let t of this.telefones){
            lista.push(t.ddd.toString() + t.numero.toString());  
        }
        return lista;
    }

    addCliente(cliente) {this.clientes.add(cliente);}  
    addTelefone(telefone) {this.telefones.add(telefone);}  
    
    listarClientes() {
        let resultado = "";
        for (let c of this.clientes) {
            resultado += c.detalhe() + "\n\n";
        }
        return resultado;
    }
    
    detalhe() { 
        return `Razão Social: ${this.razaoSocial}\n` +
               `Nome Fantasia: ${this.nomeFantasia}\n` +
               `---------------\n` +
               `${this.listarClientes()}`;
    }
}