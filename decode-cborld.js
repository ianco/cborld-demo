
const {encode, decode, documentLoader} = require('@digitalbazaar/cborld');
//import {encode, documentLoader} from '@digitalbazaar/cborld';


async function do_it() {
    // Define the string
    var encodedStringAtoB = '2QUBqAGCEXgfaHR0cHM6Ly93M2lkLm9yZy92YWNjaW5hdGlvbi92MRg+gg8LGCt4H3Vybjp1dmNpOmFmNXZzaGRlODQzamY4MzFqMTI4ZmoYLRpd5lLoGCQacLZKaBgvghkEAVgi7QE8q1DVWeeKG6txhB/Zy9noApmQOGhe+Et+SQ0nF8KxEBgdphg+DBVqMTE4MzczODU2ORFjTW9IGBhiTloYOqUYPg4YKGRKT0hOGCZlU01JVEgYJ2RNYWxlFmoxOTU4LTA3LTE3GD+iGD4NE2dKMDdCWDAzGDelGD4HGBkaYC79IBgweJBleUpoYkdjaU9pSkZaRVJUUVNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwxOS4uYTNVcUl1S1NPbUNLcmRuMmtubF9oQ2ppTjRmNFVkMWVPNWNrd0VIYjYyM1Y5dmRDd1dDREI3R0JIbFJCWVNJOGVrMkUtQnk3eHlzVkZ3dXRjcE9lRGcYOBIYQ4MZBAFYIu0BPKtQ1VnnihurcYQf2cvZ6AKZkDhoXvhLfkkNJxfCsRBYIu0BPKtQ1VnnihurcYQf2cvZ6AKZkDhoXvhLfkkNJxfCsRA=';

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

