/**
 * Custom v0.0.1
 */
$(document).ready(function() {




	//preloader
	$('.read-more').on('click',function(){
		setTimeout(function(){
			$("#progress-bar").css("display", "block").delay(5000).fadeOut();
		},500)
	});

	// modal close
	$(document).on('hide.bs.modal','.modal', function () {
		$(".modal").find('form').trigger('reset');
	});



	$("#change-password-from").on("click",function(){
          $("#change-password-modal").modal('show')
    })


	//clear modal on exit
	$('.close').on('click', function () {
		$(this).closest('div').parent().find('form').trigger('reset');
	})

	$(".modal-content").niceScroll({
		cursorcolor:"#999",
		cursorwidth: "8px",
		cursorborderradius: "0px"
	});
	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year
	    format: 'dd-mm-yyyy'
  	});

	$(".filterNav a").click(function(){
		$(this).parent().toggleClass("active");
   		$(".filterSection").toggleClass("active");
   		return false;
  	});

  	$('[data-toggle="tooltip"]').tooltip();

	var byId = function (id) { return document.getElementById(id); }

	/*// Drag and drop Day
	Sortable.create(byId('multi'), {
		animation: 150,
		draggable: '.tl-item',
		handle: '.tl-date'
	});

	// Drag and drop Elements
	[].forEach.call(byId('multi').getElementsByClassName('tl-dragHolder'), function (el){
		Sortable.create(el, {
			group: 'photo',
			animation: 150,
			// dragging ended
		    onEnd: function (evt) {
		    	console.log("S"+evt);
		    	console.log("New"+evt.newIndex);
		    	console.log("Old"+evt.oldIndex);
		    }
		});
	});*/

	//load the start and end dates



});
