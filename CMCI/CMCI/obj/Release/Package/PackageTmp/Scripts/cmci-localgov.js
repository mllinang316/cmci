(function (localgov, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function NewLocalGov() {
        $('.bttn-new-local').on('click', function (e) {
            e.preventDefault();

            window.location.href = "/LocalGov/ManageView";
        });
    };

    function ManageLocalGov() {
        $('.manage-localgov').on('click', function (e) {
            e.preventDefault();

            var $form = $(this).closest('form');

            if ($('#Region').val() === "" && $('#provinces').val() === "" &&
                $('#LguName').val() === "" && $('#lgutype').val() === "" &&
                $('#incomeclass').val() === "" && $('#cityclass').val() === "" &&
                $('#Population').val() === "" && $('#LocalMayor').val() === "" &&
                $('#CityHallAddress').val() === "" && $('#Email').val() === "" &&
                $('#LocalPhoneNumber').val() === "" && $('#LocalFaxNumber').val() === "" &&
                $('#LocalWebsite').val() === "" && $('#LocalFocalPerson').val() === "" &&
                $('#FocalDepartment').val() === "" && $('#FocalPhoneNumber').val() === "" && $('#FocalEmail').val() === "") {

                $('#Region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });

                $('#provinces').notify("Please select a province!", {
                    className: "error",
                    position: "top right"
                });

                $('#LguName').notify("Please enter an LGU!", {
                    className: "error",
                    position: "top right"
                });

                $('#lgutype').notify("Please select an LGU Type!", {
                    className: "error",
                    position: "top right"
                });

                $('#incomeclass').notify("Please select an income class!", {
                    className: "error",
                    position: "top right"
                });

                $('#cityclass').notify("Please select an city class!", {
                    className: "error",
                    position: "top right"
                });

                $('#Population').notify("Please enter a population!", {
                    className: "error",
                    position: "top right"
                });

                $('#LocalMayor').notify("Please enter a mayor!", {
                    className: "error",
                    position: "top right"
                });

                $('#CityHallAddress').notify("Please enter a address!", {
                    className: "error",
                    position: "top right"
                });


                $('#Email').notify("Please enter a email!", {
                    className: "error",
                    position: "top right"
                });

                $('#LocalPhoneNumber').notify("Please enter a phone number!", {
                    className: "error",
                    position: "top right"
                });

                $('#LocalFaxNumber').notify("Please enter a fax number!", {
                    className: "error",
                    position: "top right"
                });

                $('#LocalWebsite').notify("Please enter a website!", {
                    className: "error",
                    position: "top right"
                });

                $('#LocalFocalPerson').notify("Please enter a focal person!", {
                    className: "error",
                    position: "top right"
                });

                $('#FocalDepartment').notify("Please enter a department!", {
                    className: "error",
                    position: "top right"
                });

                $('#FocalPhoneNumber').notify("Please enter a phone number!", {
                    className: "error",
                    position: "top right"
                });

                $('#FocalEmail').notify("Please enter a email!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Region').val() === "") {
                $('#Region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#provinces').val() === "") {
                $('#provinces').notify("Please select a province!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LguName').val() === "") {
                $('#LguName').notify("Please enter an LGU!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#lgutype').val() === "") {
                $('#lgutype').notify("Please select an LGU Type!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#incomeclass').val() === "") {
                $('#incomeclass').notify("Please select an income class!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#cityclass').val() === "") {
                $('#cityclass').notify("Please select an city class!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Population').val() === "") {
                $('#Population').notify("Please enter a population!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LocalMayor').val() === "") {
                $('#LocalMayor').notify("Please enter a mayor!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#CityHallAddress').val() === "") {
                $('#CityHallAddress').notify("Please enter a address!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#Email').val() === "") {
                $('#Email').notify("Please enter a email!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LocalPhoneNumber').val() === "") {
                $('#LocalPhoneNumber').notify("Please enter a phone number!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LocalFaxNumber').val() === "") {
                $('#LocalFaxNumber').notify("Please enter a fax number!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LocalWebsite').val() === "") {
                $('#LocalWebsite').notify("Please enter a website!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#LocalFocalPerson').val() === "") {
                $('#LocalFocalPerson').notify("Please enter a focal person!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#FocalDepartment').val() === "") {
                $('#FocalDepartment').notify("Please enter a department!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#FocalPhoneNumber').val() === "") {
                $('#FocalPhoneNumber').notify("Please enter a phone number!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#FocalEmail').val() === "") {
                $('#FocalEmail').notify("Please enter a email!", {
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
                                title: "LGU successfully saved!",
                                text: "Success",
                                confirmButtonText: "OK"
                            }).then((result) => {
                                window.location.href = "/LocalGov/Index";
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
                                title: "LGU not saved properly.",
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

    function DeleteLocalGov() {
        $('.delete-lgu').on('click', function (e) {
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
                            title: "LGU successfully deleted!",
                            text: "Success",
                            confirmButtonText: "OK"
                        }).then((result) => {
                            window.location.href = "/LocalGov/Index";
                        })
                    } else if (result === 'Warning') {
                        swal.fire({
                            icon: "warning",
                            title: "Please select local government unit to delete.",
                            text: "Warning!",
                            confirmButtonText: "OK"
                        })
                    }
                    else {
                        swal.fire({
                            icon: "warning",
                            title: "LGU not deleted properly.",
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

    function LoadProvinces() {
        $('#Region').on('change', function (e) {
            e.preventDefault();

            var regionId = $(this).val();

            $.ajax({
                url: "/Province/GetProvincesByRegion?regionId=" + regionId,
                method: 'GET',
                success: function (result) {
                    ProvinceMapDom(result);
                }
            });
        });
    };

    function ProvinceMapDom(data) {

        $.each(data, function (key, value) {
            if (typeof value === 'object') {
                var options = `<option value="${value.provinceId}">${value.provinceName}</option>`
                $('#provinces').append(options);
            }
        });
    };

    // Public Method

    localgov.init = function () {
        $('.table-localgov').DataTable();

        NewLocalGov();
        LoadProvinces();
        ManageLocalGov();
        DeleteLocalGov();
    };


}(window.localgov = window.localgov || {}, jQuery));