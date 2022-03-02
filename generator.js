
function getAnnotation(params) {
  // console.log(params)

  const sumary = params.summary || '';
  return `/**
 * ${sumary}
 * @param {Object} [data] 
 * @param {RequestOptions} [opts] - 配置项
 * @returns {Promise}
 */`;
}

function getapi(api) {
  if (api == null && window.drsSpec) {
    api = window.drsSpec.paths
  }
  if (!api) {
    return '';
  }
  
  const methods = ['get','post','put','delete', 'patch'];
  const result = [];
  const names = {};
  let index = 1;

  for (const key in api) {
    const entry = api[key];

    const { fn, params } = key.replace(/^\/?api\/+/i, '').split('/').reduce((res, slug) => {
      if (slug) {
        if (/\{(.*?)\}/.test(slug)) {
          res.params.push(RegExp.$1);
        } else {
          res.fn += '_' + slug;
        }
      }
      return res;
    }, { fn: '', params: [], });

    params.push('data');
    params.push('opts');

    methods.forEach(method => {
      if (! entry[method]) {
        return;
      }

      let suffix = '';
      if (names[method+fn]) {
        suffix = '_$' + index++;
      }
      names[method+fn] = 1;

      const annotation = getAnnotation(entry[method]);
      const args = params.join(', ');
      let url = `'${key}'`;
      if (params.length > 1) {
        params.slice(0, -2).forEach(param => {
          url += `.replace('{${param}}', ${param})`;
        });
      }

      result.push(`
${annotation}
${method}${fn}${suffix}(${args}) {
  const url = ${url};
  return request.${method}(url, data, opts);
},`);

    });
  }

  console.log(result.join('\n'));
}
