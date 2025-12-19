/**
 * YUNAZAF Database Module
 * Bertugas khusus sebagai jembatan antara Form dan Google Sheets
 */
const DBHandler = {
    // URL Web App dari Apps Script Anda
    URL: 'https://script.google.com/macros/s/AKfycbwQapf43-RUsFISpgPtXNxpxlZ2W7VL3YnwZpgZPfHEEMN2nj8rsk0GDWwPN_EUb0xh/exec',

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


