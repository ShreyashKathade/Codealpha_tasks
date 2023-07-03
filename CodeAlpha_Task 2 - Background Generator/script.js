const colorInput = document.getElementById('color');
const hexValue = document.getElementById('hex-value');
const rgbValue = document.getElementById('rgb-value');
const copyButton = document.getElementById('copy-button');
const colorOptions = document.querySelectorAll('.color-option');

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    hexValue.textContent = `Hex Code: ${selectedColor}`;
    rgbValue.textContent = `RGB: ${hexToRgb(selectedColor)}`;
    document.body.style.backgroundColor = selectedColor;
});

copyButton.addEventListener('click', function() {
    const hexCode = colorInput.value;
    copyToClipboard(hexCode);
    alert(`Hex code ${hexCode} copied to clipboard!`);
});

colorOptions.forEach(function(colorOption) {
    colorOption.addEventListener('click', function() {
        const selectedColor = colorOption.style.backgroundColor;
        colorInput.value = rgbToHex(selectedColor);
        hexValue.textContent = `Hex Code: ${colorInput.value}`;
        rgbValue.textContent = `RGB: ${hexToRgb(colorInput.value)}`;
        document.body.style.backgroundColor = colorInput.value;
    });
});

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g);
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
