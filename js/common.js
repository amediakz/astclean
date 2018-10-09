$(function(){


$('figure').mousemove(function(e){
   	var widthEl = $(this).width();
   	var parentOffset = $(this).parent().offset();
   	var mouseX = Math.round(e.pageX-parentOffset.left);
   	var proc = mouseX*100/widthEl;
   	$('#divisor').width(proc+'%')
	$('#beforeafter').val(Math.round(proc))
})

$('figure').on('touchmove',function(e){
	var widthEl = $(this).width();
   	var parentOffset = $(this).parent().offset();
   	var mouseX = Math.round(e.originalEvent.touches[0].pageX-parentOffset.left);
   	var proc = mouseX*100/widthEl;
   	$('#divisor').width(proc+'%')
	$('#beforeafter').val(Math.round(proc))
})

$('figure').mouseleave(function(){
	setTimeout(function(){
	   	$('#divisor').stop().animate({'width':'50%'},777)
		$('#beforeafter').stop().animate().val(50)
	},1000)
})
$('figure').on('touchleave',function(){
	setTimeout(function(){
	   	$('#divisor').stop().animate({'width':'50%'},777)
		$('#beforeafter').stop().animate().val(50)
	},1000)
})
$('.hamburg').click(function(){
	$('.naviga').slideToggle()
})
// $('.hamburg, .naviga').mouseleave(function(){
// 		$('.naviga').css({'display':'none'})
// })

$('.slider').slick()
$('.slick-arrow').empty();
$('#callform input[type=submit]').click(function(e){
	e.preventDefault();
	var t=$(this),
		// d=$('#callform').serializeArray(),
		datas=[];

			var usernumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){5,11}(\s*)?$/,
				username = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;


				if(!$('#username').val().match(username)){
					$('#username').prev('.errorform').text('Не допустимые символы')
					var us = 0;
				}else{
					$('#username').prev('.errorform').empty();
					var us = 1;
				}

				if(!$('#usernumber').val().match(usernumber)){
					$('#usernumber').prev('.errorform').text('Неправильно введен номер')
					var ua = 0;
				}else{
					var ua = 1;
					$('#usernumber').prev('.errorform').empty();
				}

				if(ua==1 & us==1){
					$('.modal-info').empty().prepend('<div class="wrp-load"><img class="loading" src="img/svg/load.svg"><span>Обработка...</span></div>');
					$.ajax({
						type:'POST',
						url:'../mail.php',
						data:{username:$('#username').val(), usernumber:$('#usernumber').val(), type:'ajax'},
						success:function(data){
							var ddd = JSON.parse(data);
							if(ddd.stat == 'valid'){
								$('.modal-info').empty().prepend('<div class="wrp-load"><img class="loading" src="img/svg/comp.svg"><span>Отправленно...</span></div>');
								setTimeout(function(){
									$('.opened>div>div>.modal-close').click();
									$('.modal-info').empty().prepend('<div class="wrp-load">Закажите бесплатную <br/>консультацию наших специалистов.</div>');
								},3000)
							}
						}
					})
				}


			// $.ajax({
			// 	type:'POST',
			// 	url:'../ajaxFunction.php',
			// 	data:{id:$(this).attr(id), val:$(this).val()},
			// 	success:function(data){
			// 		var ddd = JSON.parse(data);
			// 		alert(ddd.msg);
			// 	}
			// })

	// 	$.ajax({
	// 		type:'POST',
	// 		url:'../ajaxFunction.php',
	// 		data:{
				
	// 			type: t.attr('id'),
	// 			value: t.val()

	// 		},
	// 		success:function(data){
	// 			if(data){
	// 				var dataa = $.parseJSON(data);
	// 				$('[for='+dataa.tt+']').html(dataa.msg)
	// 				$('[id='+dataa.tt+']').attr('st',dataa.status);
	// 				var i=0;
	// 				console.log(dataa)
	// 				$('#callform input').each(function(){
	// 					i+$(this).attr('st');
	// 					if(i==2){
	// 						console.log(i)
	// 						$('.subm').prop('disabled',false);
	// 					}
	// 				})
					
	// 			}
	// 		},error:function(){
	// 			alert('error')
	// 		}
	// 	})
})


// $('#ckLine').ckLine({
//     leftRight: false,
//     strokeColor: 'rgba(255,255,255,0.1)',
//     interval: 800,
//     animateTime: 1600,
//     animationTimeRange: [800, 1600]
// });
/************************************/
// 	var idParent = 0,
// 		   obArr = [],
// 		   obPro = [],
// 			 obj = $('[ani]');

// 	$('[ani]').each(function(){
// 		var t=$(this);
// 		t.attr('parentTarget', 'p_'+idParent++)
// 	})

// 	for(i=0; i<obj.length; i++){
// 		var t = $('[parentTarget=p_'+i+']'),
// 		attrArr = {},
// 		ani     = t.attr('ani'),
// 		speed    = t.attr('speed'),
// 		daley    = t.attr('daley'),
// 		posY    = t.offset().top,
// 		posX    = t.offset().left,
// 		interval = t.attr('interval');
// 		attrArr[i] = {
// 			'ani':ani,
// 			'speed':speed,
// 			'daley':daley,
// 			'interval':interval,
// 			'posY':posY,
// 			'posX':posX
// 		};
// 	}


// $(document).scroll(function(){
// 	obj.each(function(){
// 		var t  = $(this),
// 			tn  = $(this).next('[ani]'),
// 			wh = $(window).height(),
// 			st = $(document).scrollTop(),
// 			speed    = t.attr('speed'),
// 			daley    = t.attr('daley'),
// 			pY     = t.offset().top,
// 			pX     = t.offset().left,
// 			interval = t.attr('interval');
// 			console.log(st-wh+'/'+pY+'/'+tn.index()+'/'+t.index())

// 			if(st+wh/2>=pY){
// 				// alert('ok')
// 			}

// 	})
// })


/************************************/
	$(document).on('click','.ham',function(e){
		e.preventDefault();
		var t=$(this),
			b=$('.wrp-alll'),
			d=$('body'),
			m=$('nav.mob'),
			c=$('.closehum');
		if(t.attr('re')!='close'){
			t.toggleClass('open');
			m.css({'top':'0'})
			setTimeout(function(){
				c.css({'bottom':'calc(50% - 6px)'})
			},250)
		}else{
			t.toggleClass('open');
			m.css({'top':'-180%'})
			c.css({'bottom':'100%'})
		}
	})

	$('[page]').click(function(){
		var m=$('nav.mob'),
			c=$('.closehum');
			m.css({'top':'-100%'})
			c.css({'bottom':'100%'})
	})

	$(document).on('click','.click-faq',function(e){
		e.preventDefault();
		var t = $(this),
			n = $('.click-faq'),
			h = t.hasClass('opened'),
			f = $('.click-faq').hasClass('opened'),
			m = t.children('.minusplus'),
			b = t.next('.desc');
			n.next().not(t.next()).slideUp(500)
					.prev()
					.children('.minusplus')
					.text('+')
					.parent()
					.removeClass('opened');
			b.slideToggle(500)
					.prev()
					.children('.minusplus')
					.text('-')
					.parent()
					.addClass('opened')
			if(h)
				t.toggleClass('opened')
				 .children('.minusplus')
				 .text('+')
			else
				m.text('-')
	})

    $('[page]').on("click", function(e){
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#'+anchor.attr('page')).offset().top
        }, 777);
        return false;
    });

	$(document).on('click','[modal]',function(e){
		e.preventDefault()
		var i=$(this).attr('modal'),
			c=$(this).hasClass('modal-close'),
			m=$('#'+i),
			b=$('#modalBg'),
			h=m.hasClass('opened'),
			p=$('body');

			if(!h&&!c){
				m.fadeIn();
				p.css({'overflow':'hidden'})
				m.toggleClass('opened');
				b.css({'display':'flex'})
			}else{
				m.fadeOut();
				p.css({'overflow':'auto'})
				m.toggleClass('opened');
				b.fadeOut('fast')
			}
	})

})

jQuery(document).ready(function($){
    var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
        if( !scrolling) {
            scrolling =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
        }
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        if( !resizing) {
            resizing =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
        }
    });

    function checkPosition(container) {
        container.each(function(){
            var actualContainer = $(this);
            if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function(e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if( !dragging) {
                    dragging =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                        : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
                }
            }).on("mouseup vmouseup", function(e){
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
            leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        } else {
            ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        }
    }

 $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-135
        }, 777);
        e.preventDefault();
        return false;
    });
 $('#menu-button').on('click', function() {
  $(document.body).toggleClass('menu-open');
});
});

