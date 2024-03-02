// script.js
document.addEventListener('DOMContentLoaded', function() { 
    const avatarImage = document.querySelector('.avatar img'); 
  
    avatarImage.addEventListener('mouseover', function() {
      this.src="avatar 2.png"; 
    });
  
    avatarImage.addEventListener('mouseout', function() {
      this.src = "avatar 1.png"; 
    });
  });
  
