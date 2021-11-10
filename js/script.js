$("#email").focusout(function () {
	email = $(this).val().trim();
	$(this).val("");
	$(this).val(email);
	if (email == "") {
		$(this).val("");
		$("#ob_email").removeClass("d-none");
		$("#email").addClass("error");
	} else {
		valCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		if (!valCorreo.test(email)) {
			$("#form_email").removeClass("d-none");
			$("#email").addClass("error");
		}
	}
});

$("#password").focusout(function () {
    $("#togglepas").removeClass("borde-blanco");
	pass = $(this).val().trim();
	if (pass == "") {
		$("#ob_pass").removeClass("d-none");
        $("#togglepas").addClass("error");
		$(this).addClass("error");
	}
});

$("#email, #password").focus(function () {
	id = $(this).attr("id");
	if (id == "email") {
		$("#ob_email").addClass("d-none");
		$("#form_email").addClass("d-none");
	} else {
		$("#ob_pass").addClass("d-none");
        $("#togglepas").removeClass("error");
        $("#togglepas").addClass("borde-blanco");
	}
	$(this).removeClass("error");
});

$("#btnpass").click(function(){
    if($("#password").attr("type") == "password"){
        $("#password").attr("type", "text");
        $(this).addClass("fa-eye");
        $(this).removeClass("fa-eye-slash");
    }else{
        $("#password").attr("type", "password");
        $(this).removeClass("fa-eye");
        $(this).addClass("fa-eye-slash");
    }
});