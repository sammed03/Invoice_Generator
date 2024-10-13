document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItem');
    const itemsTable = document.getElementById('invoiceItems').getElementsByTagName('tbody')[0];
    const logoUpload = document.getElementById('logoUpload');
    const logoPreview = document.getElementById('logoPreview');
    const removeLogoBtn = document.getElementById('removeLogo');
    const errorMessages = document.getElementById('errorMessages');
    const invoiceNumberField = document.getElementById('invoiceNumber');
    const generatePDFButton = document.getElementById('generatePDF');
    const printInvoiceButton = document.getElementById('printInvoice');

    let itemCount = 0;
    let logoData = null;
    let invoiceNumber = 1;

    
    invoiceNumberField.value = `INV-${invoiceNumber}`;

    
    addItemButton.addEventListener('click', addNewItem);
    logoUpload.addEventListener('change', handleLogoUpload);
    removeLogoBtn.addEventListener('click', removeLogo);
    generatePDFButton.addEventListener('click', () => generatePDF(false));
    printInvoiceButton.addEventListener('click', () => generatePDF(true));

    
    function addNewItem() {
        itemCount++;
        const newRow = itemsTable.insertRow();
        newRow.innerHTML = `
            <td>${itemCount}</td>
            <td><input type="text" name="itemName" class="w-full p-2 border border-gray-300 rounded"></td>
            <td><input type="number" name="quantity" class="w-full p-2 border border-gray-300 rounded" value="1" min="1"></td>
            <td><input type="number" name="price" class="w-full p-2 border border-gray-300 rounded" value="0.00" min="0" step="0.01"></td>
            <td class="amount">0.00</td>
            <td><button type="button" class="bg-red-500 text-white px-4 py-2 rounded removeItem">Remove</button></td>
        `;

        
        newRow.querySelector('.removeItem').addEventListener('click', function() {
            newRow.remove();
            updateTotals();
        });

        
        newRow.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateRowTotal);
        });

        updateTotals();
    }

    
    function updateRowTotal(event) {
        const row = event.target.closest('tr');
        const quantity = parseFloat(row.querySelector('input[name="quantity"]').value) || 0;
        const price = parseFloat(row.querySelector('input[name="price"]').value) || 0;
        const amount = quantity * price;
        row.querySelector('.amount').textContent = amount.toFixed(2);
        updateTotals();
    }

    
    function updateTotals() {
        let subtotal = 0;
        document.querySelectorAll('#invoiceItems tbody .amount').forEach(cell => {
            subtotal += parseFloat(cell.textContent) || 0;
        });

        const gst = subtotal * 0.18;
        const grandTotal = subtotal + gst;

        document.getElementById('subtotal').value = subtotal.toFixed(2);
        document.getElementById('gst').value = gst.toFixed(2);
        document.getElementById('grandTotal').value = grandTotal.toFixed(2);
    }

    
    function handleLogoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoData = e.target.result;
                logoPreview.innerHTML = `<img src="${logoData}" alt="Logo" class="h-24 mx-auto">`;
                removeLogoBtn.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    }

    
    function removeLogo() {
        logoData = null;
        logoPreview.innerHTML = '';
        removeLogoBtn.classList.add('hidden');
    }

    
    function validateForm() {
        const businessName = document.getElementById('businessName').value.trim();
        const address = document.getElementById('address').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const gstinNo = document.getElementById('gstinNo').value.trim();
        const invoiceDate = document.getElementById('invoiceDate').value.trim();
        const billingName = document.getElementById('billingName').value.trim();
        const bankName = document.getElementById('bankName').value.trim();
        const accountName = document.getElementById('accountName').value.trim();
        const accountNumber = document.getElementById('accountNumber').value.trim();
        const ifscCode = document.getElementById('ifscCode').value.trim();
        
        errorMessages.innerHTML = '';

        let isValid = true;
        if (!businessName) {
            errorMessages.innerHTML += '<p>Business name is required.</p>';
            isValid = false;
        }
        if (!address) {
            errorMessages.innerHTML += '<p>Address is required.</p>';
            isValid = false;
        }
        if (!phoneNumber.match(/^\d{10}$/)) {
            errorMessages.innerHTML += '<p>Phone number must be 10 digits.</p>';
            isValid = false;
        }
        if (!gstinNo) {
            errorMessages.innerHTML += '<p>GSTIN is required.</p>';
            isValid = false;
        }
        if (!invoiceDate) {
            errorMessages.innerHTML += '<p>Invoice date is required.</p>';
            isValid = false;
        }
        if (!billingName) {
            errorMessages.innerHTML += '<p>Billing name is required.</p>';
            isValid = false;
        }
        if (!bankName || !accountName || !accountNumber || !ifscCode) {
            errorMessages.innerHTML += '<p>All bank details are required.</p>';
            isValid = false;
        }
        return isValid;
    }

    
    function generatePDF(shouldPrint = false) {
        if (!validateForm()) {
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Invoice", 105, 20, null, null, 'center');

        doc.setFontSize(12);
        doc.text(`Business Name: ${document.getElementById('businessName').value}`, 20, 30);
        doc.text(`Address: ${document.getElementById('address').value}`, 20, 40);
        doc.text(`Phone: ${document.getElementById('phoneNumber').value}`, 20, 50);
        doc.text(`GSTIN: ${document.getElementById('gstinNo').value}`, 20, 60);

        if (logoData) {
            doc.addImage(logoData, 'JPEG', 150, 20, 40, 40);
        }

        doc.text(`Invoice Date: ${document.getElementById('invoiceDate').value}`, 20, 70);
        doc.text(`Billing To: ${document.getElementById('billingName').value}`, 20, 80);

        let startY = 100;
        doc.setFontSize(12);
        doc.text("S.No", 20, startY);
        doc.text("Particulars", 40, startY);
        doc.text("QTY", 110, startY);
        doc.text("MRP", 130, startY);
        doc.text("Amount", 160, startY);

        doc.line(20, startY + 2, 190, startY + 2);

        startY += 10;

        document.querySelectorAll('#invoiceItems tbody tr').forEach((row, index) => {
            const particulars = row.querySelector('input[name="itemName"]').value;
            const qty = row.querySelector('input[name="quantity"]').value;
            const price = row.querySelector('input[name="price"]').value;
            const amount = row.querySelector('.amount').textContent;

            doc.text(`${index + 1}`, 20, startY);
            doc.text(particulars, 40, startY);
            doc.text(qty, 110, startY);
            doc.text(price, 130, startY);
            doc.text(amount, 160, startY);

            startY += 10;
        });

        doc.line(20, startY - 2, 190, startY - 2);

        startY += 10;
        doc.text(`Subtotal: ${document.getElementById('subtotal').value}`, 140, startY);
        startY += 10;
        doc.text(`GST (18%): ${document.getElementById('gst').value}`, 140, startY);
        startY += 10;
        doc.text(`Grand Total: ${document.getElementById('grandTotal').value}`, 140, startY);

        startY += 20;
        doc.text("Bank Details", 20, startY);
        doc.text(`Bank Name: ${document.getElementById('bankName').value}`, 20, startY + 10);
        doc.text(`Account Name: ${document.getElementById('accountName').value}`, 20, startY + 20);
        doc.text(`Account Number: ${document.getElementById('accountNumber').value}`, 20, startY + 30);
        doc.text(`IFSC Code: ${document.getElementById('ifscCode').value}`, 20, startY + 40);

        if (shouldPrint) {
            doc.autoPrint();
            window.open(doc.output('bloburl'));
        } else {
            doc.save(`Invoice-${invoiceNumber}.pdf`);
        }

        invoiceNumber++;
        invoiceNumberField.value = `INV-${invoiceNumber}`;
    }
});
