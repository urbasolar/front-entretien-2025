export default {
  locales: ['en_GB', 'fr_FR', 'es_ES', 'it_IT'],
  output: 'src/translation/locales/$LOCALE/$NAMESPACE.json',
  useKeysAsDefaultValue: false,
  keySeparator: '___',
  namespaceSeparator: ':::',
  sort: true,
  createOldCatalogs: false,
}
