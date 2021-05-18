(function (login, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function loginAccount() {
        $('.btn-login').on('click', function (e) {
            e.preventDefault();

            if ($('#username').val() === "" && $('#inputPassword').val() === "") {
                $('#username').notify("Please enter username", {
                    className: "error",
                    position: "top, right"
                });
                $('#inputPassword').notify("Please enter password", {
                    className: "error",
                    position: "top, right"
                });
            } else if ($('#username').val() === "") {
                $('#username').notify("Please enter username", {
                    className: "error",
                    position: "top, right"
                });
            } else if ($('#inputPassword').val() === "") {
                $('#inputPassword').notify("Please enter password", {
                    className: "error",
                    position: "top, right"
                });
            } else {
                var $form = $(this).closest('form');
                $.ajax({
                    url: $form.attr('action'),
                    method: 'POST',
                    data: $form.serializeArray(),
                    beforeSend: function () {
                        loading.show();
                    },
                    success: function (result) {
                        if (result === 'Success') {
                            swal.fire({
                                icon: "success",
                                title: "User Successfully Logged In",
                                text: "Success",
                                confirmButtonText: "OK"
                            }).then((result) => {
                                window.location.href = "/Dashboard/Index";
                            })
                        } else {
                            swal.fire({
                                icon: "error",
                                title: "Failed",
                                text: "Username and Password did not match",
                                confirmButtonText: "OK"
                            })
                        }
                    },
                    error: function () {
                        swal.fire({
                            icon: "warning",
                            title: "Warning",
                            text: "Something went wrong!",
                            confirmButtonText: "OK"
                        })
                    },
                    complete: function () {
                        loading.hide();
                    }
                });
            }


        });
    }

    // Public Method
    login.init = function () {
        loginAccount();
    };


}(window.login = window.login || {}, jQuery));