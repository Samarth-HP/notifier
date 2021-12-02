import * as process from 'process';

import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import {
  CollectorMetricExporter,
  CollectorTraceExporter,
} from '@opentelemetry/exporter-collector-grpc';
import {
  CompositePropagator,
  HttpBaggagePropagator,
  HttpTraceContextPropagator,
} from '@opentelemetry/core';

import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import { BatchSpanProcessor } from '@opentelemetry/tracing';
import { JaegerPropagator } from '@opentelemetry/propagator-jaeger';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const traceCollectorOptions = {
  url: 'grpc://localhost:4317',
};
const metricCollectorOptions = {
  url: 'grpc://localhost:4317',
};

const spanExporter = new CollectorTraceExporter(traceCollectorOptions);
const metricExporter = new CollectorMetricExporter(metricCollectorOptions);
const otelSDK = new NodeSDK({
  metricInterval: 1000,
  spanProcessor: new BatchSpanProcessor(spanExporter),
  metricExporter: metricExporter,
  contextManager: new AsyncLocalStorageContextManager(),
  textMapPropagator: new CompositePropagator({
    propagators: [
      new JaegerPropagator(),
      new HttpTraceContextPropagator(),
      new HttpBaggagePropagator(),
      new B3Propagator(),
      new B3Propagator({
        injectEncoding: B3InjectEncoding.MULTI_HEADER,
      }),
    ],
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

export default otelSDK;
// You can also use the shutdown method to gracefully shut down the SDK before process shutdown
// or on some operating system signal.
process.on('SIGTERM', () => {
  otelSDK
    .shutdown()
    .then(
      () => console.log('SDK shut down successfully'),
      (err) => console.log('Error shutting down SDK', err),
    )
    .finally(() => process.exit(0));
});
