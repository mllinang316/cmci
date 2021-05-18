(function (account, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function NewAccount() {
        $('.bttn-new-account').on('click', function (e) {
            e.preventDefault();

            window.location.href = '/Account/ManageView';
        });
    };

    function ManageAccount() {
        $('.add-account').on('click', function (e) {
            e.preventDefault();

            $form = $(this).closest('form');

            if ($('#Username').val() === "" && $('#Password').val() === "" && $('#accountType').val() === "" &&
                $('#LastName').val() === "" && $('#FirstName').val() === "" && $('#MiddleName').val() === "" &&
                $('#BirthDate').val() === "" && $('#Address').val() === "" && $('#gender').val() === "" &&
                $('#MobileNo').val() === "" && $('#Email').val() === "") {

                $('#Username').notify("Please enter a username!", {
                    className: "error",
                    position: "top right"
                });

                $('#Password').notify("Please enter a password!", {
                    className: "error",
                    position: "top right"
                });

                $('#accountType').notify("Please select an accounty type!", {
                    className: "error",
                    position: "top right"
                });

                $('#LastName').notify("Please enter a surname!", {
                    className: "error",
                    position: "top right"
                });

                $('#FirstName').notify("Please enter a first name!", {
                    className: "error",
                    position: "top right"
                });

                $('#MiddleName').notify("Please enter a middle name!", {
                    className: "error",
                    position: "top right"
                });

                $('#BirthDate').notify("Please enter a date of birth!", {
                    className: "error",
                    position: "top right"
                });

                $('#Address').notify("Please enter a address!", {
                    className: "error",
                    position: "top right"
                });

                $('#gender').notify("Please select a gender!", {
                    className: "error",
                    position: "top right"
                });

                $('#MobileNo').notify("Please enter a mobile number!", {
                    className: "error",
                    position: "top right"
                });

                $('#MobileNo').notify("Please enter an email!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Username').val() === "") {
                $('#Username').notify("Please enter a username!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Password').val() === "") {
                $('#Password').notify("Please enter a password!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#accountType').val() === "") {
                $('#accountType').notify("Please select an accounty type!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LastName').val() === "") {
                $('#LastName').notify("Please enter a surname!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#FirstName').val() === "") {
                $('#FirstName').notify("Please enter a first name!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#MiddleName').val() === "") {
                $('#MiddleName').notify("Please enter a middle name!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#BirthDate').val() === "") {
                $('#BirthDate').notify("Please enter a date of birth!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Address').val() === "") {

                $('#Address').notify("Please enter a address!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#gender').val() === "") {
                $('#gender').notify("Please select a gender!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#MobileNo').val() === "") {
                $('#MobileNo').notify("Please enter a mobile number!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Email').val() === "") {
                $('#MobileNo').notify("Please enter an email!", {
                    className: "error",
                    position: "top right"
                });
            } else {
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
                                title: "Account successfully saved!",
                                text: "Success",
                                confirmButtonText: "OK"
                            }).then((result) => {
                                window.location.href = "/Account/Accounts";
                            })
                        } else if (result === 'Warning') {
                            swal.fire({
                                icon: "warning",
                                title: "Please fill in the blank fields.",
                                text: "Warning!",
                                confirmButtonText: "OK"
                            })
                        }
                        else {
                            swal.fire({
                                icon: "warning",
                                title: "Account not saved properly.",
                                text: "Failed!",
                                confirmButtonText: "OK"
                            })
                        }
                    },
                    error: function (result) {
                        if (result === 'Error') {
                            swal.fire({
                                icon: "error",
                                title: "Something went wrong!",
                                text: "Error",
                                confirmButtonText: "OK"
                            })
                        }
                    },
                    complete: function () {
                        loading.hide()
                    }
                });
            }
        });
    };

    function DeleteAccount() {
        $('.delete-acc').on('click', function (e) {
            e.preventDefault();

            $form = $(this).closest('form');

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
                            title: "Account successfully deleted!",
                            text: "Success",
                            confirmButtonText: "OK"
                        }).then((result) => {
                            window.location.href = "/Account/Accounts";
                        })
                    } else if (result === 'Warning') {
                        swal.fire({
                            icon: "warning",
                            title: "Please select account to delete.",
                            text: "Warning!",
                            confirmButtonText: "OK"
                        })
                    }
                    else {
                        swal.fire({
                            icon: "warning",
                            title: "Account not deleted properly.",
                            text: "Failed!",
                            confirmButtonText: "OK"
                        })
                    }
                },
                error: function (result) {
                    if (result === 'Error') {
                        swal.fire({
                            icon: "error",
                            title: "Something went wrong!",
                            text: "Error",
                            confirmButtonText: "OK"
                        })
                    }
                },
                complete: function () {
                    loading.hide();
                }
            });
        });
    };

    // Public Method
    account.init = function () {
        $('.table-accounts').DataTable();

        $('.date-picker').datepicker({
            dateFormat: "mm/dd/yy",
            changeYear: true,
            changeMonth: true,
            minDate: new Date('1930/01/01'),
            maxDate: 0,
        });

        NewAccount();
        ManageAccount();
        DeleteAccount();
    };


}(window.account = window.account || {}, jQuery));