  $(document).ready(function(){

        $("#button").one('click' , function(){
          
          var input = $("input[name='checkListItem1']").val();
            
            // Hide Generate Button, Show Reset Button
            $('#button').fadeOut(0);
            $('#reset').fadeIn(400);
           
            // Append Inputs into head 


            $('<link rel="stylesheet" rel="stylesheet" href="https://fonts.googleapis.com/css?family='+input+'">').appendTo('head');
            $('<style> body{font-family:"' + input + '"}</style>').appendTo('head');
            });

            // Reset Preview
            $('.reset-btn, .reset-toggle').click(function() {
                location.reload();
            });


        // Toggle View Options

            // Toggle Grid
            $('.grid-btn').click(function(){
                $('.section-one').addClass('show-grid');
                $('.grid-btn').click(function(){
                    $('.section-one').removeClass('show-grid');
                });
            }); 

            // Toggle Caps
            $('.caps-btn').click(function(){
                $('.section-one').addClass('all-caps');
                    $('.caps-btn').click(function(){
                       $('.section-one').removeClass('all-caps');
                    });
            });

            // Toggle Background Color
            $('.bg-btn').click(function(){
                $('.section-one').removeClass('dark');
                $('.section-one').addClass('light');
                    $('.bg-btn').click(function(){
                       $('.section-one').removeClass('light');
                       $('.section-one').addClass('dark');
                    });
            });

            $('.grid-reset-btn').click(function(){
                $('.section-one, .section-two').removeClass('show-grid');
            });
            
        }); // End