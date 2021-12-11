
/**
* @param { Object } data - 数据
* @param { String } data.name - 名称
* @param { Number } [data.is_default=0] - 是否默认地址。0-是，1-不是
*/
function fn( data ) {
  console.log(data);
}

fn({
  name: 'abc',
});
