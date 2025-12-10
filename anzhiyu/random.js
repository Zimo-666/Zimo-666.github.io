var posts=["2025/11/17/2025_GEEK_Challenge/","2025/11/07/MVC/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };