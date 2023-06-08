'use strict'

const validarNascimento = (e) => {
  const value = e.target.value
  const regex = /^\d{4}-\d{2}-\d{2}$/

  const inputError = document.getElementById(`${e.target.id}-error`)

  if (regex.test(value)) {
    inputError.innerHTML = `*${e.target.id} invalida`
  } else if (value.length < 8) {
    inputError.innerHTML = `*a ${e.target.id} deve conter 8 caracteres`
  } else {
    inputError.innerHTML = ` `
  }
}

const validarDdd = (e) => {
  const value = e.trget.value

  const inputError = document.getElementById('username-error')

  if (value.length < 3) {
    inputError.innerHTML = `*O nome deve conter no minimo 3 caracteres`
  } else if (value.length > 15) {
    inputError.innerHTML = `*O deve ser menor que no minimo 15 caracteres`
  } else {
    inputError.innerHTML = ` `
  }
}

const validarEmail = (e) => {
  const value = e.trget.value

  const inputError = document.getElementById('username-error')

  if (value.length < 3) {
    inputError.innerHTML = `*O nome deve conter no minimo 3 caracteres`
  } else if (value.length > 15) {
    inputError.innerHTML = `*O deve ser menor que no minimo 15 caracteres`
  } else {
    inputError.innerHTML = ` `
  }
}

const validarTelefone = (e) => {
  const value = e.target.value
  const regex = /^[0-9]+$/
  const inputError = document.getElementById(`${e.target.id}-error`)

  if (value.length < 9) {
    inputError.innerHTML = `*O ${e.target.id} deve conter 9 caracteres`
  } else if (regex.test(value)) {
    inputError.innerHTML = `*O ${e.target.id} deve ser composto por numeros`
  } else {
    inputError.innerHTML = ` `
  }
}

const validarTexto = (e) => {
  const value = e.target.value

  const inputError = document.getElementById(`${e.target.id}-error`)

  if (value.length < 3) {
    inputError.innerHTML = `*O ${e.target.id} deve conter no minimo 3 caracteres`
  } else if (value.length > 15) {
    inputError.innerHTML = `*O ${e.target.id} deve ser menor do que 15 caracteres`
  } else {
    inputError.innerHTML = ` `
  }
}

const form = document.getElementById('form')
const username = document.getElementById('username').addEventListener('input', validarTexto)
const sobrenome = document.getElementById('sobrenome').addEventListener('input', validarTexto)
const nascimento = document.getElementById('nascimento').addEventListener('input', validarNascimento)
const estado = document.getElementById('estado').addEventListener('input', validarTexto)
const cidade = document.getElementById('cidade').addEventListener('input', validarTexto)
const ddd = document.getElementById('ddd').addEventListener('input', validarDdd)
const telefone = document.getElementById('telefone').addEventListener('input', validarTelefone)
const profissao = document.getElementById('profissao').addEventListener('input', validarTexto)
const genero = document.getElementById('genero').addEventListener('input', validarTexto)
const email = document.getElementById('email').addEventListener('input', validarEmail)
