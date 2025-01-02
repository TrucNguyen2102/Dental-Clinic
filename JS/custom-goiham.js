// JavaScript Document
/*layNTNam()

$('#banner').owlCarousel({
   	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
	
	  })
$('#cam-nhan').owlCarousel({
   	loop:true,	// cho lap lại
		 xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
	margin:40,
	 responsive:{
        0:{
            items:1,
			dots:false,
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
	
	  })
	  

$('#danh-mucDV').owlCarousel({
   	loop:true,	// cho lap lại
		 xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
	margin:40,
	 responsive:{
        0:{
            items:1,
			dots:false,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
	
	  })
*/


$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    	autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
	  })




$(document).ready(function(){
		$("#btn-datlich").click(function(){
			$(".overplay").show();
			$(".box-datlich").show();
		});
	
		$(".btn-close").click(function(){
			$(".overplay").hide();
			$(".box-datlich").hide();
		});
});