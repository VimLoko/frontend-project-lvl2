import yaml from 'js-yaml';

const parsersObj = {
  json: JSON.parse,
  yml: yaml.load,
  ayml: yaml.load,
};

const parser = (data, ext) => parsersObj[ext](data);

export default parser;
