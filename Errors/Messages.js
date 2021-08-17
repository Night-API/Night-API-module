'use strict';
const { register } = require('./NightAPIErrors');
const Messages = {
  TOKEN_INVALID: 'An invalid API key was provided.',
  TOKEN_MISSING: 'The API key is missing.',
  IS_MISSING: (miss) => `${miss} is missing`,
  ID_MISSING: `The joke ID is missing`,
  TYPE_MISSING: `The joke Type is missing`,
  INVALID_TYPE: `Invalid jokes type provided`,
  ID_IS_NAN: `The ID must be a Number`,
  MUST_BE_TYPE: (option, type) => `The ${option} option must be an ${type}`,
  MUST_BE_OBJECT: `"options" must be an object`,
  LINK_NOT_FOUND: link => `The link could not be found: ${link}`,
};
for (let [name, message] of Object.entries(Messages)) register(name, message);