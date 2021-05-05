
const {encode, decode, documentLoader} = require('@digitalbazaar/cborld');
//import {encode, documentLoader} from '@digitalbazaar/cborld';


async function do_it() {
    // Define the string
    var encodedStringAtoB = '<TODO insert your base64 here>';

    // Decode the String
    var decodedStringAtoB = atob(encodedStringAtoB);

    const byteNumbers = new Array(decodedStringAtoB.length);
    for (let i = 0; i < decodedStringAtoB.length; i++) {
        byteNumbers[i] = decodedStringAtoB.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // get the CBOR-LD bytes
    const cborldBytes = byteArray;

    // decode the CBOR-LD bytes into a Javascript object
    const jsonldDocument = await decode({cborldBytes, documentLoader});

    return jsonldDocument;
}

do_it().then((value) => console.log(value))

