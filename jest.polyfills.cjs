// jest.polyfills.cjs

const { TextDecoder, TextEncoder } = require("node:util");
const { ReadableStream, TransformStream } = require("node:stream/web");
const { performance } = require("node:perf_hooks");
const { Blob, File } = require("node:buffer");
const {
  MessageChannel,
  MessagePort,
  BroadcastChannel,
} = require("node:worker_threads");

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder, configurable: true, writable: true },
  TextEncoder: { value: TextEncoder, configurable: true, writable: true },
  ReadableStream: { value: ReadableStream, configurable: true, writable: true },
  TransformStream: {
    value: TransformStream,
    configurable: true,
    writable: true,
  },
  performance: { value: performance, configurable: true, writable: true },
  MessageChannel: { value: MessageChannel, configurable: true, writable: true },
  MessagePort: { value: MessagePort, configurable: true, writable: true },
  BroadcastChannel: {
    value: BroadcastChannel,
    configurable: true,
    writable: true,
  },
});

const { fetch, Headers, FormData, Request, Response } = require("undici");

Object.defineProperties(globalThis, {
  fetch: { value: fetch, configurable: true, writable: true },
  Blob: { value: Blob, configurable: true, writable: true },
  File: { value: File, configurable: true, writable: true },
  Headers: { value: Headers, configurable: true, writable: true },
  FormData: { value: FormData, configurable: true, writable: true },
  Request: { value: Request, configurable: true, writable: true },
  Response: { value: Response, configurable: true, writable: true },
});
