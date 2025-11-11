// Billing Toggle Functionality
const billingToggle = document.getElementById('billingToggle');
const priceElements = document.querySelectorAll('.price');
const annualSavings = document.querySelectorAll('.annual-savings');
const monthlyBilling = document.querySelectorAll('.monthly-billing');

if (billingToggle) {
    billingToggle.addEventListener('change', () => {
        const isAnnual = billingToggle.checked;
        
        priceElements.forEach(priceEl => {
            const monthlyPrice = priceEl.getAttribute('data-monthly');
            const annualPrice = priceEl.getAttribute('data-annual');
            
            if (monthlyPrice && annualPrice) {
                priceEl.textContent = isAnnual ? annualPrice : monthlyPrice;
            }
        });
        
        // Toggle billing info
        annualSavings.forEach(el => {
            el.style.display = isAnnual ? 'block' : 'none';
        });
        
        monthlyBilling.forEach(el => {
            el.style.display = isAnnual ? 'none' : 'block';
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
