#!/usr/bin/env node

import { Worker } from 'worker_threads';
import * as url from 'node:url'

const worker = new Worker(url.fileURLToPath(new URL('.', import.meta.url)) + '/worker-node.js');
const buffer = new SharedArrayBuffer(1024);
const view = new Uint8Array(buffer);

console.log('now', view[0]);

worker.postMessage(buffer);

setTimeout(() => {
  console.log('later', view[0]);
  console.log('prop', buffer.foo);
  worker.unref();
}, 500);
