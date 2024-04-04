document.addEventListener("DOMContentLoaded", function () {
    function loadContent(content) {
        document.querySelectorAll('main:not(#mainHome)').forEach(main => {
            main.innerHTML = content;
        });
    }

    document.querySelectorAll('.footer-links a').forEach(item => {
        item.addEventListener('click', function () {
            const selection = this.getAttribute('data-page');
            const content = generateFooterContent(selection);
            loadContent(content);
            document.querySelector('.youtube-container').style.display = "none";
        });
    });

    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', function () {
            const selection = this.textContent.trim().toLowerCase();
            const content = generateContent(selection);
            loadContent(content);
            document.querySelector('.youtube-container').style.display = "none";
        });
    });

    document.querySelector('.navbarCart').addEventListener('click', function () {
        const content = generateContent('cart');
        loadContent(content);
        document.querySelector('.youtube-container').style.display = "none";
    });

    function generateFooterContent(selection) {
        switch (selection) {
            case 'about':
                return AboutUs();
            case 'privacy':
                return Privacy();
            case 'terms':
                return Terms();
            case 'email':
                return EmailSubmission();
            case 'refund-policy':
                return RefundPolicy();
            case 'tracking':
                return Tracking();
            default:
                return "<h2>Page Not Found</h2><p>The requested page does not exist.</p>";
        }
    }

    function generateContent(selection) {
        switch (selection) {
            case 'thomas & friends':
                return "<h2>Thomas & Friends</h2><p>Explore our collection of Thomas & Friends toys.</p>";
            case 'custom thomas trains':
                return "<h2>Custom Thomas Trains</h2><p>Discover our custom-made Thomas trains.</p>";
            case 'trackmasters':
                return "<h2>Trackmasters</h2><p>Learn about our Trackmasters products.</p>";
            case 'about us':
                return AboutUs();
            case 'our process':
                return OurProcess();
            case 'tracking':
                return Tracking();
            case 'refund policy':
                return RefundPolicy();
            case 'email':
                return EmailSubmission();
            case 'number':
                return NumberInformation();
            case 'cart':
                return "<h2>Shopping Cart</h2><p>Your shopping cart is currently empty.</p>";
            default:
                return "<h2>Page Not Found</h2><p>The requested page does not exist.</p>";
        }
    }

    function AboutUs() {
        return `
        <div style="padding: 20px;">
        <h1>Welcome to NasiToys</h1>
        <p>Your personal gateway to the enchanting world of Thomas and Friends!</p>
    
        <p>At NasiToys, it's not just about buying and selling – it's about fostering a sense of community and spreading the joy that these beloved characters bring. Whether you're a seasoned collector, a budding hobbyist, or simply seeking a special gift for a loved one, you'll find something to delight and inspire you here.</p>
      
        <p>Explore our carefully curated collection of Thomas and Friends toys, each one handpicked with care and attention to detail. From classic models to rare finds, every item has a story to tell and a place in your heart. Whether you're searching for pristine pieces to add to your collection or seeking a lovingly restored gem, NasiToys has you covered.</p>
      
        <p>But NasiToys isn't just about the toys – it's about the passion and dedication that goes into preserving and celebrating the magic of Thomas and Friends. As a one-person operation, I personally oversee every aspect of the business, from sourcing and restoring toys to providing exceptional customer service. Your satisfaction is my top priority, and I'm here to ensure that your experience with NasiToys is nothing short of delightful.</p>
    
        <p>Years ago, my fascination with Thomas and Friends was sparked by childhood memories of watching the show and receiving a special Limited Edition VHS Tape featuring a Wooden Railway Percy from my father. Although my interest waned over time, a serendipitous discovery of Tomy/Trackmaster trains reignited my passion for the hobby in late 2019 or early 2020. What started as a chance encounter at a thrift store blossomed into a thriving category in our online store, leading to the creation of a dedicated YouTube channel in February 2022.</p>
    
        <p>Through this channel, I've connected with fellow enthusiasts, made new friends, and forged valuable partnerships. It's been a journey fueled by nostalgia, creativity, and a deep appreciation for the timeless magic of Thomas and Friends.</p>
    
        <p>Join our growing community of fellow enthusiasts and connect with like-minded individuals who share your passion for all things Thomas and Friends. From lively discussions to exclusive insights and behind-the-scenes peeks, there's always something exciting happening in the world of NasiToys.</p>
    
        <p>Thank you for visiting NasiToys – I look forward to sharing the joy and wonder of Thomas and Friends with you!</p>
    
        </div>
        `;
    }    

    function OurProcess() {
        return `
        <div style="padding: 20px;">
        <h1>Welcome to our toy train remodeling workshop!</h1>
        <p>At our facility, we take great pride in refurbishing toy trains to their former glory. Here's a glimpse into our meticulous process:</p>
        
        <ul>
            <li><strong>Inspection and Disassembly:</strong>
            <p>Upon receiving a new batch of engines, our expert technicians conduct a comprehensive inspection to assess their condition. We carefully disassemble each engine, ensuring every component is examined for wear and tear.</p></li>
        
            <li><strong>Thorough Cleaning:</strong>
            <p>Cleanliness is paramount in our workshop. We use specialized solutions and equipment to give each part of the engine a thorough cleaning. From the exterior shell to intricate internal mechanisms, no detail is overlooked.</p></li>
        
            <li><strong>Precision Soldering and Rewiring:</strong>
            <p>To guarantee optimal performance, we meticulously re-solder all joints and replace any old or damaged wires with brand-new ones. This step ensures reliable electrical connections and enhances the longevity of the train.</p></li>
        
            <li><strong>Cosmetic Restoration:</strong>
            <p>Our skilled artisans meticulously touch up the paintwork, lining, and buffers of each engine. We pay close attention to detail, ensuring that every inch of the train looks pristine and vibrant.</p></li>
        
            <li><strong>Reassembly with Care:</strong>
            <p>Once all components have been refurbished to perfection, we carefully reassemble the engine, following precise guidelines to ensure proper alignment and functionality.</p></li>
        
            <li><strong>Photography:</strong>
            <p>Before listing the refurbished trains in our store, we showcase them in our state-of-the-art photo booth. Our high-resolution images capture the beauty and craftsmanship of each engine, providing customers with a clear view of what to expect.</p></li>
        
            <li><strong>Unique SKU Assignment:</strong>
            <p>Each refurbished train receives a unique SKU (Stock Keeping Unit) number, allowing for easy identification and tracking. This ensures that customers can quickly find their desired train among our vast inventory.</p></li>
        
            <li><strong>Secure Packaging:</strong>
            <p>Finally, we carefully package each refurbished engine, using high-quality materials to ensure its safety during transit. Our robust packaging ensures that the train arrives at its new home in pristine condition.</p></li>
        </ul>
        
        <p>At our workshop, every refurbished toy train undergoes this rigorous process to ensure the highest quality standards. Whether you're a seasoned collector or a newcomer to the world of toy trains, you can trust that our remodeled engines are ready to delight and inspire for generations to come.</p>
        
        <p>Explore our collection today and find the perfect addition to your railway kingdom!</p>
        </div>
        `
    }

    function Tracking() {
        return`
        <div style="padding: 20px;" id="trackingInfo">
        <h2>ORDER STATUS</h2>
        <p>Use the input below to check your order status.</p>
        <form action="/search" method="GET" style="display: flex; flex-direction: column;>
            <label for="orderNumber"></label>
            <input type="text" id="orderNumber" name="orderNumber" placeholder="Enter Tracking Number">
            <button type="submit" class="trackingBtn">Search</button>
        </form>
        </div>
        `
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
        <div style="padding: 20px;" id="numberInfo">
        <h2>Contact Number</h2><p>Call us at 612-567-9397 for assistance.</p>
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
            <textarea id="message" name="message" rows="6" cols="50""></textarea><br><br>

            <input type="submit" value="Submit" class="submitButton">
        </form>
    </div>
    `
    }

    function Privacy() {
        return `
            <div style="padding: 20px;">
                <h2>PRIVACY POLICY</h2>
                <h3>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h3>
    
                <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
    
                <p>When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
    
                <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
    
                <h3>SECTION 2 - CONSENT</h3>
    
                <p><strong>How do you get my consent?</strong></p>
    
                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
    
                <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
    
                <p><strong>How do I withdraw my consent?</strong></p>
    
                <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us by using our contact form.</p>
    
                <h3>SECTION 3 - DISCLOSURE</h3>
    
                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
    
                <h3>SECTION 4 - THIRD-PARTY SERVICES</h3>
    
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
    
                <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
    
                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
    
                <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
    
                <p>Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.</p>
    
                <p>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
    
                <h3>SECTION 5 - SECURITY</h3>
    
                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
    
                <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
    
                <h3>COOKIES</h3>
    
                <p>We may collect information about your computer, including your IP address, operating system and browser type, for system administration and in order to create reports. This is statistical data about our users' browsing actions and patterns, and does not identify any individual.</p>
    
                <h3>SECTION 6 - AGE OF CONSENT</h3>
    
                <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
    
                <h3>SECTION 7 - CHANGES TO THIS PRIVACY POLICY</h3>
    
                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
    
                <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
    
                <h3>QUESTIONS AND CONTACT INFORMATION</h3>
    
                <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer by using our contact form.</p>
            </div>
        `;
    }    

    function Terms() {
        return `
        <div style="padding: 20px;">
            <h2>TERMS OF SERVICE</h2>
            <h3>OVERVIEW</h3>
    
            <p>This website is operated by NasiToys.com. Throughout the site, the terms "we", "us" and "our" refer to NasiToys.com. NasiToys.com offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
    
            <p>By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
    
            <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
    
            <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
    
            <p>Our store is hosted on My Ecom Shop. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
    
            <h3>SECTION 1 - ONLINE STORE TERMS</h3>
    
            <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
    
            <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
    
            <p>You must not transmit any worms or viruses or any code of a destructive nature.</p>
    
            <p>A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
    
            <h3>SECTION 2 - GENERAL CONDITIONS</h3>
    
            <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
    
            <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
    
            <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
    
            <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
    
            <h3>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h3>
    
            <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
    
            <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
    
            <h3>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h3>
    
            <p>Prices for our products are subject to change without notice.</p>
    
            <p>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
    
            <p>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
    
            <h3>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</h3>
    
            <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>
    
            <p>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
    
            <p>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
    
            <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
    
            <h3>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h3>
    
            <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers or distributors.</p>
    
            <p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
    
            <p>For more detail, please review our Returns Policy.</p>
    
            <h3>SECTION 7 - OPTIONAL TOOLS</h3>
    
            <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
    
            <p>You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
    
            <p>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
    
            <p>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>
    
            <h3>SECTION 8 - THIRD-PARTY LINKS</h3>
    
            <p>Certain content, products and services available via our Service may include materials from third-parties.</p>
    
            <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
    
            <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
    
            <h3>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h3>
    
            <p>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
    
            <p>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.</p>
    
            <p>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
    
            <h3>SECTION 10 - PERSONAL INFORMATION</h3>
    
            <p>Your submission of personal information through the store is governed by our Privacy Policy. Please read our Privacy Policy.</p>
    
            <h3>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h3>
    
            <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
    
            <p>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
    
            <h3>SECTION 12 - PROHIBITED USES</h3>
    
            <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
    
            <h3>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h3>
    
            <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
    
            <p>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
    
            <p>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>
    
            <p>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
    
            <p>In no case shall NasiToys.com, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
    
            <h3>SECTION 14 - INDEMNIFICATION</h3>
    
            <p>You agree to indemnify, defend and hold harmless NasiToys.com and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>
    
            <h3>SECTION 15 - SEVERABILITY</h3>
    
            <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
    
            <h3>SECTION 16 - TERMINATION</h3>
    
            <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
    
            <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
    
            <p>If in our sole judgement you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
    
            <h3>SECTION 17 - ENTIRE AGREEMENT</h3>
    
            <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
    
            <p>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
    
            <p>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
    
            <h3>SECTION 18 - GOVERNING LAW</h3>
    
            <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of:</p>
    
            <p>5001 Northwest Dr Unit 11684 Saint Paul, MN 55111</p>
    
            <h3>SECTION 19 - CHANGES TO TERMS OF SERVICE</h3>
    
            <p>You can review the most current version of the Terms of Service at any time at this page.</p>
    
            <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
    
            <h3>SECTION 20 - CONTACT INFORMATION</h3>
    
            <p>Questions about the Terms of Service should be sent to us by using our contact form.</p>
            </div>
        `;
    }
});
