import url from 'url';

export default function gerBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name) {
  var useMockApi = name in url.parse(window.location.href, true).query;
  return useMockApi;
}
