function PublishPost() {
    console.log("PublishPost function called"); // Debug log
    const username = document.getElementById("Username_input").value.trim();
    const postText = document.getElementById("UserPost_input").value.trim();

    if(username === "" && postText === "") return; // Empty post block

    const now = new Date();
    const time = now.toLocaleTimeString();

    // New post div create
    const newPost = document.createElement("div");
    newPost.classList.add("post"); // Updated class for styling
    newPost.innerHTML = `
        <div class="user-icon" style="background-color: pink;"></div>
        <div class="post-content">
            <p class="username">${username}</p>
            <p class="timestamp">${time}</p>
            <p class="post-text">${postText}</p>
            <div class="interaction-icons">
                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                <p class="username">${username}</p>
                <p class="timestamp">${time}</p>
                <p class="post-text">${postText}</p>
                <div class="interaction-icons">
                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                    <p class="username">${username}</p>
                    <p class="timestamp">${time}</p>
                    <p class="post-text">${postText}</p>
                    <div class="interaction-icons">
                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                        <p class="username">${username}</p>
                        <p class="timestamp">${time}</p>
                        <p class="post-text">${postText}</p>
                        <div class="interaction-icons">
                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                            <p class="username">${username}</p>
                            <p class="timestamp">${time}</p>
                            <p class="post-text">${postText}</p>
                            <div class="interaction-icons">
                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                <p class="username">${username}</p>
                                <p class="timestamp">${time}</p>
                                <p class="post-text">${postText}</p>
                                <div class="interaction-icons">
                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                    <p class="username">${username}</p>
                                    <p class="timestamp">${time}</p>
                                    <p class="post-text">${postText}</p>
                                    <div class="interaction-icons">
                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                        <p class="username">${username}</p>
                                        <p class="timestamp">${time}</p>
                                        <p class="post-text">${postText}</p>
                                        <div class="interaction-icons">
                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                            <p class="username">${username}</p>
                                            <p class="timestamp">${time}</p>
                                            <p class="post-text">${postText}</p>
                                            <div class="interaction-icons">
                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                <p class="username">${username}</p>
                                                <p class="timestamp">${time}</p>
                                                <p class="post-text">${postText}</p>
                                                <div class="interaction-icons">
                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                    <p class="username">${username}</p>
                                                    <p class="timestamp">${time}</p>
                                                    <p class="post-text">${postText}</p>
                                                    <div class="interaction-icons">
                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                        <p class="username">${username}</p>
                                                        <p class="timestamp">${time}</p>
                                                        <p class="post-text">${postText}</p>
                                                        <div class="interaction-icons">
                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                            <p class="username">${username}</p>
                                                            <p class="timestamp">${time}</p>
                                                            <p class="post-text">${postText}</p>
                                                            <div class="interaction-icons">
                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                <p class="username">${username}</p>
                                                                <p class="timestamp">${time}</p>
                                                                <p class="post-text">${postText}</p>
                                                                <div class="interaction-icons">
                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                    <p class="username">${username}</p>
                                                                    <p class="timestamp">${time}</p>
                                                                    <p class="post-text">${postText}</p>
                                                                    <div class="interaction-icons">
                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                        <p class="username">${username}</p>
                                                                        <p class="timestamp">${time}</p>
                                                                        <p class="post-text">${postText}</p>
                                                                        <div class="interaction-icons">
                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                            <p class="username">${username}</p>
                                                                            <p class="timestamp">${time}</p>
                                                                            <p class="post-text">${postText}</p>
                                                                            <div class="interaction-icons">
                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                <p class="username">${username}</p>
                                                                                <p class="timestamp">${time}</p>
                                                                                <p class="post-text">${postText}</p>
                                                                                <div class="interaction-icons">
                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                    <p class="username">${username}</p>
                                                                                    <p class="timestamp">${time}</p>
                                                                                    <p class="post-text">${postText}</p>
                                                                                    <div class="interaction-icons">
                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                        <p class="username">${username}</p>
                                                                                    <p class="timestamp">${time}</p>
                                                                                    <p class="post-text">${postText}</p>
                                                                                    <div class="interaction-icons">
                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                        <p class="username">${username}</p>
                                                                                        <p class="timestamp">${time}</p>
                                                                                        <p class="post-text">${postText}</p>
                                                                                        <div class="interaction-icons">
                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                            <p class="username">${username}</p>
                                                                                            <p class="timestamp">${time}</p>
                                                                                            <p class="post-text">${postText}</p>
                                                                                            <div class="interaction-icons">
                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                <p class="username">${username}</p>
                                                                                                <p class="timestamp">${time}</p>
                                                                                                <p class="post-text">${postText}</p>
                                                                                                <div class="interaction-icons">
                                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                    <p class="username">${username}</p>
                                                                                                    <p class="timestamp">${time}</p>
                                                                                                    <p class="post-text">${postText}</p>
                                                                                                    <div class="interaction-icons">
                                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                        <p class="username">${username}</p>
                                                                                                        <p class="timestamp">${time}</p>
                                                                                                        <p class="post-text">${postText}</p>
                                                                                                        <div class="interaction-icons">
                                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                            <p class="username">${username}</p>
                                                                                                            <p class="timestamp">${time}</p>
                                                                                                            <p class="post-text">${postText}</p>
                                                                                                            <div class="interaction-icons">
                                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                <p class="username">${username}</p>
                                                                                                                <p class="timestamp">${time}</p>
                                                                                                                <p class="post-text">${postText}</p>
                                                                                                                <div class="interaction-icons">
                                                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                    <p class="username">${username}</p>
                                                                                                                    <p class="timestamp">${time}</p>
                                                                                                                    <p class="post-text">${postText}</p>
                                                                                                                    <div class="interaction-icons">
                                                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                        <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                        <p class="username">${username}</p>
                                                                                                                        <p class="timestamp">${time}</p>
                                                                                                                        <p class="post-text">${postText}</p>
                                                                                                                        <div class="interaction-icons">
                                                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                            <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                            <p class="username">${username}</p>
                                                                                                                            <p class="timestamp">${time}</p>
                                                                                                                            <p class="post-text">${postText}</p>
                                                                                                                            <div class="interaction-icons">
                                                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                                                                                                                                <p class="username">${username}</p>
                                                                                                                                <p class="timestamp">${time}</p>
                                                                                                                                <p class="post-text">${postText}</p>
                                                                                                                                <div class="interaction-icons">
                                                                                                                                    <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
