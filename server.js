function crypt1() {
    var Crypt = require('cryptr')
    cryptr = new Crypt('menguer')

    const enc = cryptr.encrypt('cristian')
    const dec = cryptr.decrypt(enc)

    console.log(enc)
    console.log(dec)

}

function crypt2() {

    function encrypt(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return {
            iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex')
        };
    }

    function decrypt(text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }

    const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    var hw = encrypt("cristian")
    console.log(hw)
    console.log(decrypt(hw))
}

crypt1()

console.log('\n')

crypt2()