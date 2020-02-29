import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, poweredBy } from 'instantsearch.js/es/widgets';

// This is the Search-only API key
const searchClient = algoliasearch(
  'KSDFJKHCO2',
  'fadf7c74af324735d9e45d68481531ab'
);

const search = instantsearch({
  indexName: 'astropy_fulltext_dev',
  searchClient,
});

search.addWidgets([
  poweredBy({
    container: '#powered-by',
    theme: 'light',
  }),
  searchBox({
    container: '#searchbox',
  }),

  hits({
    container: '#hits',
    templates: {
      empty: 'No results for <q>{{ query }}</q>',
    },
  }),
]);

search.start();
