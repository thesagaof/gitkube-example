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
                                                                      
