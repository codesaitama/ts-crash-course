function compilerConfig(tsFile, importFile) {

  const typeScriptVersion = '4.2.3';

  System.config({
    transpiler: 'ts',
    typescriptOptions: {
    },
    packages: {
      ".": {
        main: `./src/${tsFile}.ts`,
        defaultExtension: 'ts'
      }
    },
    meta: {
      'typescript': { 'exports': 'ts' }
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
      'typescript': 'npm:typescript@' + typeScriptVersion + '/lib/typescript.js'
    }
  });

  System.import(`./src/${importFile}`)
    .catch(console.error.bind(console));
}

compilerConfig('main', 'main')
