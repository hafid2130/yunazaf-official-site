/**
 * YUNAZAF Database Module
 * Bertugas khusus sebagai jembatan antara Form dan Google Sheets
 */
const DBHandler = {
    // URL Web App dari Apps Script Anda
    URL: 'https://script.google.com/macros/s/AKfycbwkzpVFcVmefsicAN7-a6aVUFIF2xrEOqEJA4J0nDFOF474hjjRfF_kLTO7FGQAhUx_ug/exec',

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
