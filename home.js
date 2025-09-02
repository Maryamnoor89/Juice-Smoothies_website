const textElement = document.getElementById("text-part");
const highlightPart = "Happiness";
const textPart = "Taste the ";

function startTyping() {
  // Clear previous content
  textElement.innerHTML = "";

  // Create span for highlighted part
  const span = document.createElement("span");
  span.className = "highlight";
  span.style.color = "#ffd700";
  span.style.fontFamily = "Allura";
  span.style.fontSize = "80px";
  textElement.appendChild(span);

  let index1 = 0; // index for normal text
  let index2 = 0; // index for highlight text

  function typeText() {
    if (index1 < textPart.length) {
      textElement.insertBefore(
        document.createTextNode(textPart.charAt(index1)),
        span
      );
      index1++;
      setTimeout(typeText, 100);
    } else {
      typeHighlight();
    }
  }

  function typeHighlight() {
    if (index2 < highlightPart.length) {
      span.innerHTML += highlightPart.charAt(index2);
      index2++;
      setTimeout(typeHighlight, 120);
    } else {
      // After finishing, wait 2 seconds and restart
      setTimeout(startTyping, 2000);
    }
  }

  typeText();
}

// Start the typing loop
startTyping();



// Card Animation 
document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });


// FAQ pop 

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".FAQs", {
    scale: 0.3,
    opacity: 0,
    transformOrigin: "center center",
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".FAQs",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });
});

// hr reveal animaiton 
gsap.to("#line_side", {
      scaleY: 1,        // grow fully
      duration: 1.6,      // time for one reveal
      repeat: -1,       // infinite loop
      yoyo: true,       // reverse back (so it shrinks up)
      ease: "power2.inOut"
    });

    gsap.to("#horizontal_hr", {
      scaleX: 1,        // grow fully
      duration: 1.6,      // time for one reveal
      repeat: -1,       // infinite loop
      yoyo: true,       // reverse back (so it shrinks up)
      ease: "power2.inOut"
    });

    gsap.to("#hr-02", {
    scaleX: 1,
    duration: 2,
    backgroundColor: "#ffd700",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#hr-02",
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play reverse play reverse"
    }
    });

// Middle video text
document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = Array.from(document.querySelectorAll('.extra-text'));
  const typeSpeed = 30;

  // Save original text and clear
  paragraphs.forEach(p => {
    p.dataset.text = p.textContent.trim();
    p.textContent = "";
  });

  function typeElement(el, callback) {
    const text = el.dataset.text;
    el.textContent = "";

    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    el.appendChild(cursor);

    let i = 0;
    const timer = setInterval(() => {
      cursor.insertAdjacentText('beforebegin', text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => cursor.remove(), 400);
        if (callback) callback();
      }
    }, typeSpeed);
  }

  let typingIndex = 0; // keeps track of current line being typed
  let isTyping = false; // prevents multiple triggers at once

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isTyping) {
        isTyping = true; // prevent overlap
        typingIndex = paragraphs.indexOf(entry.target);
        typeNextLine(typingIndex, () => isTyping = false);
      }
    });
  }, { threshold: 0.6 });

  paragraphs.forEach(p => observer.observe(p));

  function typeNextLine(startIndex, callback) {
    if (startIndex >= paragraphs.length) {
      if (callback) callback();
      return;
    }
    typeElement(paragraphs[startIndex], () => {
      typeNextLine(startIndex + 1, callback);
    });
  }
});

//Quantiiy selector 
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

decreaseBtn.addEventListener("click", () => {
  let current = parseInt(quantityInput.value);
  if(current > 1) quantityInput.value = current - 1;
});

increaseBtn.addEventListener("click", () => {
  let current = parseInt(quantityInput.value);
  quantityInput.value = current + 1;
});

//Form errors 
document.getElementById("ordernow_btn").addEventListener("click", function () {
  // First 4 required fields
  const fields = ["name", "number", "address", "juice"];
  let isValid = true;

  fields.forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Order Placed");
  } else {
    alert("⚠️ Please fill all required fields first.");
  }
});

//Show Close popup 
function showPopup() {
  document.getElementById("popupForm").classList.add("show");
}

function closePopup() {
  document.getElementById("popupForm").classList.remove("show");
}
//Whatsapp 
document.getElementById("whtapp").addEventListener("click", function () {
  window.open("https://wa.me/923312047442", "_blank");
});


