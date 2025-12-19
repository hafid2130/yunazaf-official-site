/**
 * YUNAZAF Database Module
 * Bertugas khusus sebagai jembatan antara Form dan Google Sheets
 */
const DBHandler = {
    // URL Web App dari Apps Script Anda
    URL: 'https://script.google.com/macros/s/AKfycbxfHW_pEtegLwC4UrIRZ3n2q0Rl1EUmr-It1oq7kJZWXii566cCKwQ2KQfmhFN9-0eg/exec',

    /**
     * Fungsi untuk mengirim data pesanan
     * @param {FormData} formData - Data dari form kontak
     * @returns {Promise} - Hasil pengiriman
     */
    sendOrder: async function(formData) {
        try {
            const response = await fetch(this.URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Penting untuk Google Apps Script
            });
            return { success: true, message: 'Data berhasil diproses oleh modul database' };
        } catch (error) {
            console.error('Database Module Error:', error);
            throw error;
        }
    }

};



