$(window).load(function(){
    $("#sliderHotPruct").flexicel({
        visibleItem: 4,
         animationSpeed: 700,
        autoPlay: true,
        autoPlaySpeed:1500,
        pauseonHover: true,
        enableResponsiveBreakpoints:true,
        responsiveBreakpoints:{
            portrait:{
                changePoint: 640,
                 visibleItem: 1,
            },
            landscape: {
                changePoint: 640,
                visibleItem: 2,
            },
            tablet:{
                changePoint: 768,
                visibleItem: 3,

            }
        }
    });
});

 