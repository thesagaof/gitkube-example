<<<<<<< HEAD
$("#submit_signup").click(function(){
    if($("#eid_signup").val() == "" || $("#ig_signup").val() == "" || $("#level_signup").val() == "" || $("#capab_signup").val() == "")
    {
      alert("Please fill in the required fields!");
      $("#myModal_Upload").modal('show');
          }
              else
                  {
                  //      $("#myModal_Upload").modal('hide');
                  //      $("#myModal_SendReviewBtn").modal('show');
                        console.log($("#eid_signup").val());
                              list();
                                  }
                                    });

                                      
                                      function list() {
                                          var eid = document.getElementById('eid_signup').value;
                                              var ig = document.getElementById('ig_signup').value;
                                                  var level = document.getElementById('level_signup').value;
                                                      var capab = document.getElementById('capab_signup').value;
                                                          document.getElementById('myText').innerHTML = eid;
                                                              document.getElementById('myText').innerHTML = ig;
                                                                  document.getElementById('myText').innerHTML = level;
                                                                      document.getElementById('myText').innerHTML = capab;
                                                                      }
                                                                      
=======
$(document).ready(function() {
  var entriesElement = $("#list");
  var formElement = $("#signupForm");
  var submitElement = $("#submit_signup");
  var eid = $("#eid_signup");
  var ig = $("#ig_signup");
  var level = $("#level_signup");
  var capab = $("#capab_signup");
  //var entryContentElement = $("#guestbook-entry-content");
  var hostAddressElement = $("#guestbook-host-address");

//listing_append_eid
  var appendGuestbookEntries = function(data) {
    entriesElement.empty();
    $.each(data, function(key, val) {
      entriesElement.append("<p>" + val + "</p>");
    });
  }
//listing_append_eid
  var handleSubmission = function(e) {
    e.preventDefault();
    var entryValue = eid.val() + ig.val() + level.val() + capab.val()
    if (entryValue.length > 0) {
      entriesElement.append("<p>...</p>");
      $.getJSON("rpush/guestbook/" + entryValue, appendGuestbookEntries);
    }
    return false;
  }

  // colors = purple, blue, red, green, yellow
  var colors = ["#549", "#18d", "#d31", "#2a4", "#db1"];
  var randomColor = colors[Math.floor(5 * Math.random())];
  (function setElementsColor(color) {
    headerTitleElement.css("color", color);
    eid.css("box-shadow", "inset 0 0 0 2px " + color);
    submitElement.css("background-color", color);
  })(randomColor);

  submitElement.click(handleSubmission);
  formElement.submit(handleSubmission);
  hostAddressElement.append(document.URL);

  // Poll every second.
  (function fetchGuestbook() {
    $.getJSON("lrange/guestbook").done(appendGuestbookEntries).always(
      function() {
        setTimeout(fetchGuestbook, 1000);
      });
  })();
});
>>>>>>> cbaf76358f2511e065cd830755f516f03465902d
