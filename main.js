// Chức năng Tìm kiếm
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const query = document.getElementById('searchInput').value;
        if (query.trim() !== '') {
            alert('Bạn đang tìm kiếm từ khóa: ' + query);
        } else {
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });
}

// Chức năng Bình luận bài viết
const submitComment = document.getElementById('submitComment');
if (submitComment) {
    submitComment.addEventListener('click', function() {
        const nameInput = document.getElementById('commentName');
        const textInput = document.getElementById('commentText');
        const commentList = document.getElementById('commentList');

        if (nameInput.value.trim() === '' || textInput.value.trim() === '') {
            alert('Vui lòng nhập đầy đủ họ tên và nội dung bình luận!');
            return;
        }

        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        newComment.innerHTML = `<strong>${nameInput.value}</strong><p>${textInput.value}</p>`;

        commentList.appendChild(newComment);

        nameInput.value = '';
        textInput.value = '';
    });
}
