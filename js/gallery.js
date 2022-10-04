const captionArray = [
  "OUR DOGS",
  "PUPPIES",
  "SNOW COVERED BRIDGE",
  "WINTER TRAIL",
  "CHRISTMAS STORE",
  "CABIN VIEW",
  "SHINING TREES",
  "CABIN LAKE",
  "STREET VIEW",
  "KIDS ADVENTURE",
];
const descriptionArray = [
  "Our dogs for you to see",
  "Our happy puppies",
  "Walk on the snow-covered bridge",
  "All Christmas sweets under one roof",
  "Scenic ocean views",
  "Live in our snow covered cabins",
  "A view of the top from the bottom",
  "A gorgeous look at the snowy lake",
  "A wonderful drive near the woods",
  "A fun place for kids to enjoy the season",
];

const modalDesc = [
  "You can come and play with our dogs and pick who you like!",
  "We make sure our puppies grow up with love.",
  "The snow takes over the bridge. It looks beautiful but remember to wear the right shoes!",
  "You can go hiking on these trails if you have the right equipment. Contact our center to give you a checklist!",
  "You can visit the shops to have fun Christmas shopping with and for your friends and family. We keep all kinds of candies and goodies",
  "Our cabins are equipped with everything you need on a cold winter night. You can enjoy these views as you make yourself comfortable in our cabins",
  "It’s not always cloudy and the sun does shine here! When you walk in the park, your view of the trees will remain unmatched!",
  "This breathtaking view of the lake can be seen from your cabin. It is frozen over but the receptionist will give you a list of do’s and don’ts",
  "Along with some hiking trails, we have our streets that get cleaned up regularly for you to enjoy your drives",
  "Your kids can enjoy at the playhouse made just for some winter activities. It has something to do for adults as well as kids!",
];

function imagesGallery() {
  var count = 0;
  for (var i = 0; i <= 4; i++) {
    var ul = document.getElementById("gallery");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    for (var j = 1; j <= 2; j++) {
      var imageCount = count + 1;
      var column = document.createElement("div");
      column.setAttribute("class", "column imageBox");
      column.setAttribute("id", "img" + imageCount);
      column.setAttribute("onclick", "openLightBox('img" + imageCount + "')"); // openLightBox("img1")

      var img = document.createElement("img");
      img.src = "images/" + imageCount + ".jpg";
      img.setAttribute("class", "photo");

      var figCaption = document.createElement("figcaption");
      figCaption.innerHTML = captionArray[count];

      var middleDiv = document.createElement("div");
      middleDiv.setAttribute("id", imageCount);
      middleDiv.setAttribute("class", "middle");
      middleDiv.setAttribute("onclick", "openModal(" + count + ")");

      var textDiv = document.createElement("div");
      textDiv.setAttribute("id", "text");
      textDiv.innerHTML = descriptionArray[count];
      count = count + 1;
      middleDiv.appendChild(textDiv);
      column.appendChild(img);
      column.appendChild(figCaption);
      column.appendChild(middleDiv);
      row.appendChild(column);

      // //   var openDesc = "<div id='desc' onClick = 'showInfo(";
      //   var openDescClose = ")'>";
      //   var closeDesc = "</div>";
    }

    ul.appendChild(row);
  }
}
imagesGallery();

var closeInfoText = "Click here to close";
var closeInfo = document.getElementById("closeInfo");
closeInfo.addEventListener("click", hideInfo);

function hideInfo() {
  document.getElementById("modal").style.visibility = "hidden";
}

let flag = false; //Indicate the Modal is open or not

function openModal(param) {
  document.getElementById("modal").style.visibility = "visible";
  document.getElementById("headingModal").innerHTML = captionArray[param];
  document.getElementById("bodyModal").innerHTML = modalDesc[param];
  document.getElementById("closeInfo").innerHTML = closeInfoText;
  flag = true; //Indicates the MOdal is Open
}

/* Open lightbox on button click */
function openLightBox(param) {
  if (flag == true) {
    // Check if Modal is open
    flag = false; //Set value of flag as false
    return; //Prevent the below code to run
  }
  $(".backdrop")
    .animate({ opacity: ".50" }, 300, "linear")
    .css("display", "block");
  $(".box").fadeIn();

  //Check if lightbox has an image
  if ($(".box").contents("img")) {
    $(".box").contents().remove("img"); //If true, clear image
  }

  var img = $("#" + param + " img").clone(); //Duplicate DOM element
  $(".box").append(img); //Insert duplicated element in another element
}

/* Click to close lightbox */
$(".close, .backdrop").click(function () {
  closeBox();
});

function closeBox() {
  $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
    $(".backdrop").css("display", "none");
  });
  $(".box").fadeOut();
}
