#!/bin/sh

npm run cti create './src/_shared/application' -- -i '*spec.ts' -b && 
npm run cti create './src/_shared/domain' -- -i '*spec.ts' -e 'tests' -b && 
npm run cti create './src/_shared/infra' -- -i '*spec.ts' -i 'migrator-cli.ts' -b && 

npm run cti create './src/notification/application' -- -i '*spec.ts' -b && 
npm run cti create './src/notification/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/notification/infra' -- -i '*spec.ts' -b
