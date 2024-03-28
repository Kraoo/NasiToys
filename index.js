document.addEventListener("DOMContentLoaded", function () {
    function loadContent(content) {
        document.getElementById("pageContent").innerHTML = content;
    }

    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', function () {
            const selection = this.textContent.trim().toLowerCase();
            const content = generateContent(selection);
            loadContent(content);
            document.querySelector('.youtube-container').style.display = "none";
        });
    });

    function generateContent(selection) {
        switch (selection) {
            case 'thomas & friends':
                return "<h2>Thomas & Friends</h2><p>Explore our collection of Thomas & Friends toys.</p>";
            case 'custom thomas trains':
                return "<h2>Custom Thomas Trains</h2><p>Discover our custom-made Thomas trains.</p>";
            case 'trackmasters':
                return "<h2>Trackmasters</h2><p>Learn about our Trackmasters products.</p>";
            case 'about us':
                return "<h2>About Us</h2><p>Learn more about NasiToys and our team.</p>";
            case 'our process':
                return "<h2>Our Process</h2><p>Find out how we create our toys.</p>";
            case 'tracking':
                return "<h2>Tracking</h2><p>Track your order status here.</p>";
            case 'refund policy':
                return RefundPolicy();
            case 'email':
                return EmailSubmission();
            case 'number':
                return NumberInformation();
            default:
                return "<h2>Page Not Found</h2><p>The requested page does not exist.</p>";
        }
    }
    
    function RefundPolicy() {
        return `
        <div style="padding: 20px;">
            <h2>Refund Policy</h2>
            <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange.</p>
            <p><strong>Eligibility:</strong></p>
            <ul>
                <li>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</li>
                <li>Several types of goods are exempt from being returned:</li>
                <ul>
                    <li>Perishable goods such as food, flowers, newspapers, or magazines</li>
                    <li>Intimate or sanitary goods</li>
                    <li>Hazardous materials</li>
                    <li>Flammable liquids or gases</li>
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Some health and personal care items</li>
                </ul>
            </ul>
            <p><strong>Partial Refunds:</strong></p>
            <p>There are certain situations where only partial refunds are granted:</p>
            <ul>
                <li>Book with obvious signs of use</li>
                <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
                <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
                <li>Any item that is returned more than 30 days after delivery</li>
            </ul>
            <p><strong>Refund Process:</strong></p>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
            <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
            <p><strong>Late or Missing Refunds:</strong></p>
            <p>If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, followed by your bank. If you've done all of this and you still have not received your refund yet, please contact us by using our contact form.</p>
            <p><strong>Sale items:</strong></p>
            <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
            <p><strong>Exchanges:</strong></p>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email by using our contact form.</p>
            <p><strong>Gifts:</strong></p>
            <p>If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
            <p>If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
            <p><strong>Shipping:</strong></p>
            <p>To return your product, please contact us for return authorization and address.</p>
            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
            <p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.</p>
            </div>
        `;
    }

    function NumberInformation() {
        return `
        <div style="padding: 20px;">
        <h2>Contact Number</h2><p>Call us at xxx-xxx-xxxx for assistance.</p>
        </div>
        `
    }

    function EmailSubmission() {
        return `
        <div style="padding: 20px;">
        <h2>Contact Us</h2>
        <p>Thank You For Visiting NasiToys Store!</p>
        <p>Please use the form below to submit any requests, feedback, or questions and we will get back to you ASAP.</p>
        <p>NasiToys team</p>
    
        <form>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" style="width: 20%; padding: 5px;"><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" style="width: 20%; padding: 5px;"><br><br>
            
            <label for="phone">Phone:</label><br>
            <input type="tel" id="phone" name="phone" style="width: 20%; padding: 5px;"><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="6" cols="50" style="width: 90%; padding: 50px;"></textarea><br><br>

            <input type="submit" value="Submit" class="submitButton">
        </form>
    </div>
    `
    }
    
    if (window.location.pathname === "/index.html") {
        document.querySelector('.youtube-container').style.display = "";
    } else {
        document.querySelector('.youtube-container').style.display = "none";
    }
});
