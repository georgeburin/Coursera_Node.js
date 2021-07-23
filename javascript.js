
       var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });
       
       // var modalToggle = document.getElementById('loginModal') // relatedTarget
       //   modalToggle.show(modalToggle)

       //   var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
       //     keyboard: false
        //  })

        //  var myModal = document.getElementById('loginModal')

        //  myModal.addEventListener('show.bs.modal', function (event) {
        //    if (!data) {
        //      return event.preventDefault() // stops modal from being shown
        //    }
        //  })


        //id="show-modal"
        //id="ReserveTableModal"
        //id="loginModal"


      //  document.getElementById('show-modal').onclick = function(){alert('hello world');};
      //  document.getElementById('show-modal').addEventListener('click',function(){ alert('hello world'); });
      //document.getElementById('show-modal').addEventListener('click',function(){ alert('hello world'); }); 


      //works:
      //function eventClicker(){ alert('hello world'); }
      //document.getElementById('show-modal').addEventListener('click', eventClicker);


      /* 
      this happens when we open a modal:

      var myModalEl = document.getElementById('loginModal')
      myModalEl.addEventListener('show.bs.modal', function (event) {
        alert('hello world');
      })
      */
      
      //declare a modal object in some sort.
      var myModal = new bootstrap.Modal(document.getElementById("ReserveTableModal"), {});
      /*
      we can show this modal right when the page loads:
      document.onreadystatechange = function () {
        myModal.show();
      };
      */

      //or we can call this modal whenever there is a click to a button.
      document.getElementById('show-modal').addEventListener('click', function () {
        myModal.show();
      });

      // another modal for the login
      var myModal1 = new bootstrap.Modal(document.getElementById("loginModal"), {});
      document.getElementById('show-login-modal').addEventListener('click', function () {
        myModal1.show();
      });
    
