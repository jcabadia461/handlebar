import handlebars from 'handlebars';

const template1 = `
Estas son las {{type}}
{{#each people}}
  <h1>{{name}}</h1>
{{/each}}
`;

const tplCompilada = handlebars.compile(template1);

const obj = {
  type: 'Personas',
  people : [{
    name: 'Juan Carlos'
  },
  {
    name: 'Andrés'
  },
  {
    name: 'Marta'
  }
  ]
};

const result = tplCompilada(obj);

console.log(result);