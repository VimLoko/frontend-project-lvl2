import _ from 'lodash';

const ast = (obj1, obj2) => {
  const objKeys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]);
  objKeys.sort();
  return objKeys.map((key) => {
    const obj1hasKey = _.has(obj1, key);
    const obj2hasKey = _.has(obj2, key);
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];
    if (!obj1hasKey) {
      return {
        key, type: 'added', value: obj2Value,
      };
    }
    if (!obj2hasKey) {
      return {
        key, type: 'removed', value: obj1Value,
      };
    }
    if (_.isPlainObject(obj1Value) && _.isPlainObject(obj2Value)) {
      return {
        key, type: 'nested', value: ast(obj1Value, obj2Value),
      };
    }
    if (!_.isEqual(obj1Value, obj2Value)) {
      return {
        key, type: 'changed', value: obj2Value, oldValue: obj1Value,
      };
    }
    return {
      key, type: 'unchanged', value: obj1Value,
    };
  });
};

export default ast;
