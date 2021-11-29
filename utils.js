// default export, só pode ter um por arquivo
// no import não é necessario {} chaves
const sum = (a, b) => a + b;
export default sum;

// named export, pode ter varios por arquivos
// no import É preciso o uso de {} chaves
export const sub = (a, b) => a - b;

// outra forma de export com chaves
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

export { mult, div as divisao };

// da pra usar assim, exportando tudo
// export * as utils
