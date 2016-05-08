import ApiBuilder from 'claudia-api-builder';
const api = new ApiBuilder();
module.exports = api;

api.get('/', (req) => {
  return `claudia-api-boilerplate: use the /name route to make requests`;
});


api.get('/name', (req) => {
  if(req.queryString.name) {
    return `Hi there ${req.queryString.name}!`
  } else {
    return 'Use /name?name=YourName to pass query';
  }
});
