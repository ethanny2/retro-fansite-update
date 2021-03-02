/*Scraping with php and ajax??? */
let curPage = 0;
let posts = [
  `<div class="row post-row">
<div class="col-xs-12">
  <article class="post cf">
    <header>
      <h1>
        Kid Cudi Interviews Playboi Carti
      </h1>
    </header>
    <p>
      Nearly 3 months after the release of Playboi Carti's sophmore
      album (Whole lotta' red) Carti talks with long time collaborator
      Kid Cudi about his process making the album.
    </p>
    <figure class="right">
      <a rel="noopener" href="https://www.interviewmagazine.com/music/playboi-carti-takes-kid-cudi-behind-the-method-to-his-madness">
        <img
        src="../images/post2-interview.jpg"
        alt="Playboi Carti Interview photo shoot"
      />
      </a>
      <figcaption>
        Interview magazine's photoshoot
      </figcaption>
    </figure>
    <p>
      The interview touches on a variety of topics including the
      influence of Atlanta rap and punk rock on Playboi Carti's musical
      style. They later touch on why the album was mostly left without
      many features from other artists and what it's like working with
      Kanye West.
    </p>
    <blockquote class="quote-left">
      "I get a lot of my inspiration from vampire movies, because when
      you see a vampire, he always looks good. He don’t age. He can’t
      die." - Playboi Carti
    </blockquote>
    <footer>
      <p>
        Source
        <a
        rel="noopener"
          href="https://www.interviewmagazine.com/music/playboi-carti-takes-kid-cudi-behind-the-method-to-his-madness"
          >Interview Magazine</a
        >
      </p>
      <p class="date">Posted March 1, 2021</p>
    </footer>
    </footer>
  </article>
</div>
</div>`,
  `<div class="row post-row">
<div class="col-xs-12">
  <article class="post cf">
    <header>
      <h1>
        M3tamorphosis Music Video
      </h1>
    </header>
    <p>
     Days off the release of his #1 billboard top 100 spot album, Playboi
     Carti just dropped a new music video for M3tamorphosis; one of the
     few songs on the album to have a feature.
    </p>
    <figure class="middle" >
      <a rel="noopener" href="https://shop.playboicarti.com/?utm_campaign=nav&utm_medium=referral&utm_source=playboicarti.com">
        <img
        src="../images/post4-merch.png"
        alt="Sample merch of sweaters and shirts"
      />
      </a>
      <figcaption>
        Sample sweaters and shirts
      </figcaption>
    </figure>
   
    <footer>
      <p>
        Source
        <a
        rel="noopener"
          href="https://shop.playboicarti.com/?utm_campaign=nav&utm_medium=referral&utm_source=playboicarti.com"
          >Playboi Carti Merch Store</a
        >
      </p>
      <p class="date">Posted Jan 2, 2021</p>
    </footer>
    </footer>
  </article>
</div>
</div>`,
  `  <div class="row post-row">
<div class="col-xs-12">
<article class="post cf">
  <header>
    <h1>
      M3tamorphosis Music Video
    </h1>
  </header>
  <p>
   Days off the release of his #1 billboard top 100 spot album, Playboi
   Carti just dropped a new music video for M3tamorphosis; one of the
   few songs on the album to have a feature.
  </p>
  <figure class="middle" >
    <a rel="noopener" href="https://www.youtube.com/watch?v=wGBsIelFe-E">
      <img
      src="../images/post3-metamor.png"
      alt="Scene from music video with Playboi Carti and Kid Cudi riding a tracktor"
    />
    </a>
    <figcaption>
      Kid Cudi and Playboi Carti in the M3tamorphosis video
    </figcaption>
  </figure>
 
  <footer>
    <p>
      Source
      <a
      rel="noopener"
        href="https://www.youtube.com/watch?v=wGBsIelFe-E"
        >Youtube</a
      >
    </p>
    <p class="date">Posted December 26, 2020</p>
  </footer>
  </footer>
</article>
</div>
</div>`,
  `    <div class="row post-row">
<div class="col-xs-12">
<article class="post cf">
  <header>
    <h1>WLR Release</h1>
  </header>
  <p>
    Playboi Carti's long anticipated sophmore album; WLR (whole lotta'
    red), stealth dropped on Dec 25, 2020 nearly 2 years after his
    original album "Die Lit" debuted.
  </p>
  <figure class="left">
    <a href="https://smarturl.it/WLRcarti" rel="noopener">
      <img
        src="../images/post1-wlr.webp"
        alt="Whole lotta' red album cover art"
      />
    </a>
    <figcaption>
      WLR Cover art
    </figcaption>
  </figure>
  <p>
    Sales projections for the album have exceeded expectations landing
    the artist his first spot in the billboard top 100.
  </p>
  <blockquote class="quote-right">
    " Immediately after its release, the first-week sales projections
    emerged and they were pretty high. Industry forecasters predicted
    that he would be pushing somewhere between 125,000-135,000 in its
    first week" - hotnewhiphop.com
  </blockquote>
  <footer>
    <p>
      Source
      <a
      rel="noopener"
        href="
      https://www.hotnewhiphop.com/playboi-cartis-whole-lotta-red-first-week-sales-are-in-news.124003.html
      "
        >hotnewhiphop</a
      >
    </p>
    <p class="date">Posted Dec 25, 2020</p>
  </footer>
</article>
</div>
</div>`
];
document.addEventListener("DOMContentLoaded", function() {
  const leftArrow = document.getElementById("left-arrow");
  const container = document.getElementById("post-section");
  const rightArrow = document.getElementById("right-arrow");
  container.innerHTML += posts[0];
  container.innerHTML += posts[1];
  leftArrow.addEventListener("click", function() {
    if (leftArrow.classList.contains("disable")) return;
    paginate(leftArrow, rightArrow, false);
  });
  rightArrow.addEventListener("click", function() {
    if (rightArrow.classList.contains("disable")) return;
    paginate(leftArrow, rightArrow, true);
  });
  ajaxScrape();
});

function ajaxScrape() {
  console.log("Calling scrape");
  $.ajax({
    //Need to change when in prod
    url: "../../php/scrape.php",
    dataType: "json",
    type: "POST",
    success: function(response) {
      if (response.error) {
        console.log("Invalid URL");
      } else {
        console.log(response);
        if (response.pic) {
          console.log("returned image");
          instertPhoto(response);
        } else {
          console.log("returned video");
          insertVideo(response);
        }
      }
    },
    error: function() {
      $(".rank").html("Invalid URL or Some Error occured!");
    },
    complete: function() {
      console.log("Done with AJAX function");
    }
  });
}

function instertPhoto(responseObject) {
  $("#main_gallery").append(responseObject["pic"]);
}

function insertVideo(responseObject) {
  $("#main_gallery").append(responseObject["vid"]);
}

// Two posts per page
function paginate(left, right, isForward) {
  isForward ? curPage++ : curPage--;
  if (isForward) {
    left.classList.remove("disable");
    right.classList.add("disable");
  } else {
    left.classList.add("disable");
    right.classList.remove("disable");
  }
  const indexes = [curPage * 2, curPage * 2 + 1];
  console.log({ indexes });
  let currentPosts = document.querySelectorAll(".post-row");
  currentPosts.forEach(function(post) {
    post.remove();
  });
  const container = document.getElementById("post-section");
  console.log({ container });
  container.innerHTML += posts[indexes[0]];
  container.innerHTML += posts[indexes[1]];
  currentPosts = document.querySelectorAll(".post-row");
  currentPosts[0].scrollIntoView();
}
