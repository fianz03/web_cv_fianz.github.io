function redirect() {
    const storeIframe = document.getElementById('storeIframe');
    if (storeIframe.style.display === 'none') {
        storeIframe.style.display = 'block';
    } else {
        storeIframe.style.display = 'none';
    }
}
