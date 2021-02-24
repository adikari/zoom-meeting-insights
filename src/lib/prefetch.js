const { makeParameterStore } = require('@a-cloud-guru/parameter-store');

const { STAGE } = process.env;

const configPath = `/${STAGE}/schedule/config`;
const secretPath = `/${STAGE}/schedule/secret`;

const CONFIGS = ['SCHEDULE_TABLE_NAME'];
const SECRETS = ['ENGINE_API_KEY'];

const parameterStore = makeParameterStore({
  configPath,
  secretPath,
  provider: { name: 'ssm' }
});

const prefetch = () =>
  Promise.all([
    parameterStore.getConfigs(CONFIGS),
    parameterStore.getSecrets(SECRETS)
  ])
    .then(([configs, secrets]) => ({ ...configs, ...secrets }))
    .then((configs) => {
      Object.keys(configs).forEach((key) => {
        process.env[key] = configs[key];
      });

      return configs;
    });

module.exports = { parameterStore, prefetch };
