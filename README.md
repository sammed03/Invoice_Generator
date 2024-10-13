<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Generator Documentation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h1 class="text-3xl font-bold mb-6 text-center">Invoice Generator Documentation</h1>
            
            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">1. Overview</h2>
                <p class="mb-2">
                    The Invoice Generator is a web-based tool designed to dynamically generate invoices for businesses. 
                    It allows users to add items, calculate totals (including GST), upload a company logo, and generate a printable or downloadable invoice in PDF format.
                </p>
                <p>
                    This guide explains the steps to set up the project and how to use the tool effectively.
                </p>
            </section>
            
            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">2. Technologies Used</h2>
                <ul class="list-disc list-inside pl-4">
                    <li>HTML5</li>
                    <li>Tailwind CSS for styling</li>
                    <li>JavaScript for functionality</li>
                    <li>jspdf library for PDF generation</li>
                </ul>
            </section>
            
            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">3. Setup Instructions</h2>
                <p class="mb-4">
                    Follow the steps below to set up the Invoice Generator locally:
                </p>
                <ol class="list-decimal list-inside pl-4">
                    <li class="mb-2">Download or clone the project repository from GitHub.</li>
                    <li class="mb-2">Ensure you have the necessary files: <code>index.html</code>, <code>main.js</code>, and the <code>tailwind.css</code> stylesheet or link.</li>
                    <li class="mb-2">Include the <code>jspdf</code> library by adding the following script tag in the <code>&lt;head&gt;</code> section of your HTML file:</li>
                    <pre class="bg-gray-100 p-4 rounded-lg">
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"&gt;&lt;/script&gt;
                    </pre>
                    <li class="mb-2">Open <code>index.html</code> in your web browser.</li>
                </ol>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">4. How to Use the Invoice Generator</h2>
                <p class="mb-4">
                    The Invoice Generator allows you to input various details about the invoice and dynamically calculate totals, as well as generate a PDF version. Here’s how to use it:
                </p>
                <ol class="list-decimal list-inside pl-4">
                    <li class="mb-2">
                        <strong>Business Details:</strong> Fill in your business name, address, phone number, and GSTIN (Goods and Services Tax Identification Number).
                    </li>
                    <li class="mb-2">
                        <strong>Invoice Number and Date:</strong> The invoice number auto-increments after every invoice generated. Set the invoice date manually.
                    </li>
                    <li class="mb-2">
                        <strong>Adding Items:</strong> Click "Add Item" to add new items to the invoice. Each item includes a description, quantity, price, and the total amount is calculated automatically.
                    </li>
                    <li class="mb-2">
                        <strong>Subtotal, GST, and Total:</strong> The tool automatically calculates the subtotal, GST (set at 18%), and the grand total for the invoice.
                    </li>
                    <li class="mb-2">
                        <strong>Upload Company Logo:</strong> You can upload a logo for your invoice by selecting an image from your computer.
                    </li>
                    <li class="mb-2">
                        <strong>Bank Details:</strong> Provide the bank name, account name, account number, and IFSC code to include payment details on the invoice.
                    </li>
                    <li class="mb-2">
                        <strong>Generate PDF:</strong> Once all details are filled in, click "Generate PDF" to download the invoice as a PDF document.
                    </li>
                    <li class="mb-2">
                        <strong>Print Invoice:</strong> Alternatively, you can click "Print Invoice" to directly print the generated invoice.
                    </li>
                </ol>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">5. Error Handling & Validation</h2>
                <p>
                    The form validates the following inputs:
                </p>
                <ul class="list-disc list-inside pl-4 mb-2">
                    <li>Business Name, Address, and Billing Name are required.</li>
                    <li>Phone number must be a 10-digit numeric value.</li>
                    <li>GSTIN is required for businesses.</li>
                    <li>All bank details (Bank Name, Account Name, Account Number, IFSC Code) are mandatory.</li>
                </ul>
                <p>
                    If any of these fields are missing or invalid, error messages will be displayed below the form.
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">6. Customization</h2>
                <p>
                    To customize the invoice layout or design, modify the <code>main.js</code> file for functionality, and adjust the HTML or Tailwind CSS classes in the <code>index.html</code> file for styling.
                </p>
                <p>
                    You can also change the GST percentage or modify the PDF layout by adjusting the <code>jsPDF</code> configurations.
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold mb-4">7. Contact Information</h2>
                <p>
                    For further questions or support, please contact <a href="mailto:support@invoicegenerator.com" class="text-blue-500 underline">support@invoicegenerator.com</a>.
                </p>
            </section>
        </div>
    </div>
</body>
</html>
