// script.js
document.addEventListener('DOMContentLoaded', function() {
    // تحديث السنة في تذييل الصفحة
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // زر تغيير اللون
    const changeColorBtn = document.getElementById('changeColorBtn');
    const hero = document.querySelector('.hero');
    const colors = ['#e3f2fd', '#ffebee', '#e8f5e9', '#fff8e1', '#f3e5f5'];
    let currentColorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        hero.style.backgroundColor = colors[currentColorIndex];
    });
    
    // معالجة نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // في التطبيق الحقيقي، سترسل هذه البيانات إلى الخادم
        alert(`شكراً ${name} لتواصلك معنا!\nسنرد على رسالتك قريباً على البريد ${email}`);
        
        // إعادة تعيين النموذج
        contactForm.reset();
    });
});
