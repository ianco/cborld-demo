
const {encode, decode, documentLoader} = require('@digitalbazaar/cborld');
//import {encode, documentLoader} from '@digitalbazaar/cborld';


async function do_it() {
    // Define the json-lc
    const jsonldDocument = {
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: 'Note',
      summary: 'CBOR-LD',
      content: 'CBOR-LD is awesome!'
    };

    // encode a JSON-LD Javascript object into CBOR-LD bytes
    const cborldBytes = await encode({jsonldDocument, documentLoader});

    // decode the CBOR-LD bytes into a Javascript object
    const jsonldDocumentRet = await decode({cborldBytes, documentLoader});

    return jsonldDocumentRet;
}

do_it().then((value) => console.log(value))

