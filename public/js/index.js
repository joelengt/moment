 (function () {

    // Event Icon plus to open modal
    function iconPlusToOpenModal () {
        // Event dom Dom
        var $btnIconPlus = document.querySelectorAll('.Perritos__item--info__plus');

        // Cicle to add event click
        for(var j = 0; j <= $btnIconPlus.length - 1; j++) {
            var el_IconPlus = $btnIconPlus[j];
            
            if (el_IconPlus.addEventListener) {
                 el_IconPlus.addEventListener("click", modalBox, false); 

            } else {
               el_IconPlus.attachEvent("onclick", modalBox);
            }

        }

    }

    // Event HoverImage
    // function HoverToImage() {
    //     var $images = document.querySelectorAll('.ImagenToHover');
    //     var $modal = document.querySelector('.Perritos__item--cover--modal');

    //     // Modal Hover Item event
    //     $('.Perritos__item--cover').hover(function(e) {
    //         var $this = $(this);
    //         var $article = $this.closest('.Perritos__item--cover--modal');
    //         var $modal = $article.context.lastElementChild;

    //         $modal.style.display = 'block';

    //     }, function() {
    //       $('.Perritos__item--cover--modal').css('display', 'none');
    //     });
    // }

    // Event Open Modal
    function EventModals() {
        var $btnArticles = document.querySelectorAll('.Perritos__item--cover');

        for (var i = 0; i <= $btnArticles.length - 1; i++) {
            var el = $btnArticles[i];

            if (el.addEventListener) {
                 el.addEventListener("click", modalBox, false); 

            } else {
               el.attachEvent("onclick", modalBox);
            }

        }
    }

    // Event Listener de evento click
    function modalBox() {
        // Get the modal
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('myModalContent');

        modal.style.display = "block";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Button go Top
    function goTopPage() {
        var $btnArrowTop = document.querySelector('#btnGoTop');

        // btn go Top Event
        if ($btnArrowTop.addEventListener) {
             $btnArrowTop.addEventListener("click", function () {
                $('html, body').animate({scrollTop : 0},800);
                return false;

             }, false); 

        } else {
           $btnArrowTop.attachEvent("onclick", function () {
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
        }
    }

    // Button go to WUF.pe
    function goToWuf() {
        var $btnGoToWuf = document.querySelector('#btnGoToWuf');

        if ($btnGoToWuf.addEventListener) {
             $btnGoToWuf.addEventListener("click", function () {
                window.open("http://www.wuf.pe/","_blank");
            }, false); 

        } else {
           $btnGoToWuf.attachEvent("onclick", function () {
                window.open("http://www.wuf.pe/","_blank");
            });
        }
    }

    // Button Ancla
    function goAncla() {
        $('#btnKnowMoreancla').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
              && location.hostname == this.hostname) {

                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 1000);
                    return false;
               }
          }

        });
    }

    // Function close modal
    function closeModalEvent() {
        var $btnModal = document.getElementById('myModal');
        $btnModal.style.display='none';
    }

    // Event click Btn "Cerrar X"
    function EventCloseButton() {
        var $btnClose = document.querySelector('#btn_close');

        if ($btnClose.addEventListener) {
             $btnClose.addEventListener("click", closeModalEvent, false);

        } else {
           $btnClose.attachEvent("onclick", closeModalEvent);

        }
    }

    function EventCloseOutModal() {
        var $btnModal = document.getElementById('myModal');

        if ($btnModal.addEventListener) {
             $btnModal.addEventListener("click", function(event) {
                if ($(event.target).has('#myModalContent').length) {
                  closeModalEvent();
                }
            }, false);

        } else {
           $btnModal.attachEvent("onclick", function(event) {
                if ($(event.target).has('#myModalContent').length) {
                  closeModalEvent();
                }
           });
        }

    }

    function main () {
        // HoverToImage();
        EventModals();
        goTopPage();
        goToWuf();
        goAncla ();
        iconPlusToOpenModal();
        EventCloseButton();
        EventCloseOutModal();
    }

    // window.addEventListener("load", function(event) {
        main ();
    // });

})();