import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ttk7xi88',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skt9mLKROARp9fXloOGNprCBRM5cWtZmvG8aSawm8Pp4FhI2TD3Gce8oEBHQFjEBtY8CHOhQWqdrxRb1ZuDBnurL3OPhBwfbPWL0Y8bm3AjzH8da6JZ3XFtcIQRpGLydm7cu8wZsDYymTFnsfMqmp8swPrmGVyBRZb48J1IYKsJeaFw9z0w6',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);