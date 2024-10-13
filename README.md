<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Generator Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #333;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-align: center;
        }
        h2 {
            font-size: 1.8em;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 10px;
            color: #555;
        }
        ul, ol {
            margin-left: 20px;
            margin-bottom: 10px;
        }
        code {
            background: #e9ecef;
            padding: 2px 5px;
            border-radius: 4px;
            color: #d63384;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Invoice Generator Documentation</h1>
        
        <section>
            <h2>1. Overview</h2>
            <p>
                The Invoice Generator is a web-based tool designed to dynamically generate invoices for businesses. 
                It allows users to add items, calculate totals (including GST), upload a company logo, and generate a printable or downloadable invoice in PDF format.
            </p>
            <p>
                This guide explains the steps to set up the project and how to use the tool effectively.
            </p>
        </section>
        
        <section>
            <h2>2. Technologies Used</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS for styling</li>
                <li>JavaScript for functionality</li>
                <li>jspdf library for PDF generation</li>
            </ul>
        </section>
        
        <section>
            <h2>3. Setup Instructions</h2>
            <p>Follow the steps below to set up the Invoice Generator locally:</p>
            <ol>
                <li>Download or clone the project repository from GitHub.</li>
                <li>Ensure you have the necessary files: <code>index.html</code>, <code>main.js</code>, and the CSS stylesheet.</li>
                <li>Include the <code>jspdf</code> library by adding the following script tag in the <code>&lt;head&gt;</code> section of your HTML file:</li>
                <pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"&gt;&lt;/script&gt;</code></pre>
                <li>Open <code>index.html</code> in your web browser.</li>
            </ol>
        </section>

        <section>
            <h2>4. How to Use the Invoice Generator</h2>
            <p>The Invoice Generator allows you to input various details about the invoice and dynamically calculate totals, as well as generate a PDF version. Here’s how to use it:</p>
            <ol>
                <li><strong>Business Details:</strong> Fill in your business name, address, phone number, and GSTIN (Goods and Services Tax Identification Number).</li>
                <li><strong>Invoice Number and Date:</strong> The invoice number auto-increments after every invoice generated. Set the invoice date manually.</li>
                <li><strong>Adding Items:</strong> Click "Add Item" to add new items to the invoice. Each item includes a description, quantity, price, and the total amount is calculated automatically.</li>
                <li><strong>Subtotal, GST, and Total:</strong> The tool automatically calculates the subtotal, GST (set at 18%), and the grand total for the invoice.</li>
                <li><strong>Upload Company Logo:</strong> You can upload a logo for your invoice by selecting an image from your computer.</li>
                <li><strong>Bank Details:</strong> Provide the bank name, account name, account number, and IFSC code to include payment details on the invoice.</li>
                <li><strong>Generate PDF:</strong> Once all details are filled in, click "Generate PDF" to download the invoice as a PDF document.</li>
                <li><strong>Print Invoice:</strong> Alternatively, you can click "Print Invoice" to directly print the generated invoice.</li>
            </ol>
        </section>

        <section>
            <h2>5. Error Handling & Validation</h2>
            <p>The form validates the following inputs:</p>
            <ul>
                <li>Business Name, Address, and Billing Name are required.</li>
                <li>Phone number must be a 10-digit numeric value.</li>
                <li>GSTIN is required for businesses.</li>
                <li>All bank details (Bank Name, Account Name, Account Number, IFSC Code) are mandatory.</li>
            </ul>
            <p>If any of these fields are missing or invalid, error messages will be displayed below the form.</p>
        </section>

        <section>
            <h2>6. Customization</h2>
            <p>To customize the invoice layout or design, modify the <code>main.js</code> file for functionality, and adjust the HTML or CSS for styling.</p>
            <p>You can also change the GST percentage or modify the PDF layout by adjusting the <code>jsPDF</code> configurations.</p>
        </section>

        <section>
            <h2>7. Contact Information</h2>
            <p>For further questions or support, please contact <a href="mailto:support@invoicegenerator.com">support@invoicegenerator.com</a>.</p>
        </section>
    </div>
</body>
</html>
