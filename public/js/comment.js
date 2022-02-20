const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('textarea[name=“comment-body”]').value;
    const postId = document.querySelector('input[name=“post-id”]').value;
  
    if (content) {
      const response = await fetch('/api/comments/' + postId, {
        method: 'POST',
        body: JSON.stringify({ 
          content,
          postId
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);