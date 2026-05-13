// Improved scroll functionality
        function scrollToSection(targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Add click event listeners to dock items
        document.addEventListener('DOMContentLoaded', function() {
            
            function updateGreeting() {
                const hour = new Date().getHours();
                let text = 'Hello!';
                if (hour < 12) text = 'Good morning ☕';
                else if (hour < 18) text = 'Good afternoon ☀️';
                else text = 'Good evening 🌙';
                const greetEl = document.getElementById('greeting');
                if (greetEl) greetEl.textContent = `${text} I'm Ronak.`;
            }
            updateGreeting();

            const dockItems = document.querySelectorAll('.dock-item');
            dockItems.forEach(item => {
                item.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    scrollToSection(target);
                });
            });
            
        });

        // Form submission handler
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                setTimeout(() => {
                    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    btn.disabled = false;
                    e.target.reset();
                }, 2000);
            }, 1500);
        });

        // Enhanced dock hover effect
        