(function (province, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function ManageProvince() {
        $('.manage-province').on('click', function (e) {
            e.preventDefault();

            var $form = $(this).closest('form'); 

            if ($('#Region').val() === "" && $('#ProvinceName').val() === "") {
                $('#Region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });
                $('#ProvinceName').notify("Please enter a province!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Region').val() === "") {
                $('#Region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#ProvinceName').val() === "") {
                $('#ProvinceName').notify("Please enter a province!", {
                    className: "error",
                    position: "top right"
                });
            } else {
                $.ajax({
                    url: $form.attr('action'),
                    method: 'POST',
                    data: $form.serializeArray(),
                    beforeSend: function () {
                        loading.show()
                    },
                    success: function (result) {
                        if (result === 'Success') {
                            swal.fire({
                                icon: "success",
                                title: "Province successfully saved!",
                                text: "Success",
                                confirmButtonText: "OK"
                            }).then((result) => {
                                window.location.href = "/Province/Index";
                            });
                        } else if (result === 'Warning') {
                            swal.fire({
                                icon: "warning",
                                title: "Please fill in the blank fields.",
                                text: "Warning!",
                                confirmButtonText: "OK"
                            });
                        }
                        else {
                            swal.fire({
                                icon: "warning",
                                title: "Province not saved properly.",
                                text: "Failed!",
                                confirmButtonText: "OK"
                            });
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
            }

        });
    };

    function DeleteProvince() {
        $('.delete-pro').on('click', function (e) {
            e.preventDefault();

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
                            title: "Province successfully deleted!",
                            text: "Success",
                            confirmButtonText: "OK"
                        }).then((result) => {
                            window.location.href = "/Province/Index";
                        })
                    } else if (result === 'Warning') {
                        swal.fire({
                            icon: "warning",
                            title: "Please select province to delete.",
                            text: "Warning!",
                            confirmButtonText: "OK"
                        })
                    }
                    else {
                        swal.fire({
                            icon: "warning",
                            title: "Province not deleted properly.",
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

    function NewProvince() {
        $('.bttn-new-province').on('click', function (e) {
            e.preventDefault();

            window.location.href = "/Province/ManageView";
        });
    };

    // Public Method
    province.init = function () {
        $('.table-province').DataTable();

        NewProvince();
        ManageProvince();
        DeleteProvince();
    };

}(window.province = window.province || {}, jQuery));