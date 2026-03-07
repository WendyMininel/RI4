import { Empresa, Cliente, Endereco, Telefone } from './RI4Modulo.js'

let f1 = new Telefone('12', '981435323')
let f2 = new Telefone('12', '982570045')
let f3 = new Telefone('12', '981325242')
let f4 = new Telefone('12', '981192235')
let f5 = new Telefone('12', '997544578')
let f6 = new Telefone('12', '997043446')
let f7 = new Telefone('12', '39175460')
let f8 = new Telefone('11', '39658745')

let end1 = new Endereco('SP', 'Caçapava', 'Av.A', '550')
let end2 = new Endereco('SP', 'Caçapava', 'Av.B', '930')
let end3 = new Endereco('SP', 'Caçapava', 'Av.C', '1084')
let end4 = new Endereco('SP', 'Caçapava', 'Av.D', '75')
let end5 = new Endereco('SP', 'Caçapava', 'Av.E', '115')
let end6 = new Endereco('SP', 'Caçapava', 'Av.F', '86')

let c1 = new Cliente('Ana Julia', '123456789', end1)
c1.addTelefone(f1)
c1.addTelefone(f2)

let c2 = new Cliente('Gabrielle', '124578963', end2)
c2.addTelefone(f3)
c2.addTelefone(f4)

let c3 = new Cliente('Wendy', '369258147', end3)
c3.addTelefone(f5)
c3.addTelefone(f6)

let c4 = new Cliente('Ana Flávia', '852741963', end4)
c4.addTelefone(f7)
c4.addTelefone(f8)

let e1 = new Empresa('ABC Ltda', 'Mercado Livre', '4228265984', end6)
e1.addTelefone(f7)
e1.addTelefone(f8)

e1.addCliente(c1)
e1.addCliente(c2)
e1.addCliente(c3)
e1.addCliente(c4)

console.log(e1.detalhe())