
// test.js - Test apakah enkripsi work
console.log('✅ Enkripsi berhasil!');
console.log('File config.js harusnya:');
try {
    const config = require('./config.js');
    console.log('✅ Config loaded:', typeof config);
} catch (e) {
    console.log('❌ Config error:', e.message);
}
