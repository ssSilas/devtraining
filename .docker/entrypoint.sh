#!/bin/bash

npm i
npm run build
npm run typeorm migration:run -d dist/database.providers.js
npm run dev