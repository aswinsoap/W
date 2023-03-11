const searchInput = document.getElementById('search-input');

// Automatically focus on the input field when the page loads
searchInput.focus();

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;

        // Use a switch statement to check the prefix of the query
        switch (true) {
            case query.startsWith('yt'):
                window.location.href = 'https://www.youtube.com/';
                break;

            case query.startsWith('maps'):
                window.location.href = 'https://www.google.com/maps/';
                break;

            case query.startsWith('chatgpt'):
                window.location.href = 'https://chat.openai.com/chat';
                break;
                
            case query.startsWith('drive'):
                window.location.href = 'https://drive.google.com/drive/u/0/my-drive';
                break;
            case query.startsWith('mail'):
                window.location.href = 'https://mail.google.com/mail/u/0/?tab=qm#inbox';
                break;  
            case query.startsWith('photos'):
                window.location.href = 'https://photos.google.com/?pli=1';
                break;    

            default:
                window.location.href = `https://www.google.com/search?q=${query}`;
                break;
        }
    }
});

// Focus on the input field when the window is clicked
document.addEventListener('click', () => {
    searchInput.focus();
});
