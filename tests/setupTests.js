const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><div id="first-name" data-error="first-name-error data-success-icon="first-name-success"></div>`);
global.document = dom.window.document;
