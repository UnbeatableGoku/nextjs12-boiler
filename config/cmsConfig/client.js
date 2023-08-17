import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'gs3lkble4inx',
  environment: 'master',
  accessToken: 'B6V6S1PLKTSY6ADMmlUqi24FFcXHfv42iDEcMR89JXM',
});

export default client;
