    const desc = document.querySelector(".cmd");
    let text = ["C", "O", "M", "M", "A", "N", "D", "S"];
    let currentText = "";
    let i = 0;

    

    const interval = setInterval(() => {
        if (i < text.length) {
            currentText += text[i];
            desc.innerHTML = currentText;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 500);