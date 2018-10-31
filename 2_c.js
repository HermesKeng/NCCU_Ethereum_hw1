var keythereum = require("keythereum");
const params = { keyBytes: 32, ivBytes: 16 };
const options = {
          kdf: "pbkdf2",
          cipher: "aes-128-ctr",
          kdfparams: {
            c: 262144,
            dklen: 32,
            prf: "hmac-sha256"
    }
};

var dk = keythereum.create(params);
var password="nccu";
keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options, function (keyObject) {
  console.log(keyObject)
})
