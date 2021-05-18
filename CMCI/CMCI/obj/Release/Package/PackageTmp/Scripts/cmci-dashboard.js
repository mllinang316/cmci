
(function (dashboard, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgba(" + r + "," + g + "," + b + ", 0.5)";
    }

    function poolColors(a) {
        var pool = [];
        for (i = 0; i < a; i++) {
            pool.push(dynamicColors());
        }
        return pool;
    }

    function LoadIndicators() {
        $('#pillars').on('change', function (e) {
            e.preventDefault();

            var pillarId = $(this).val();

            $.ajax({
                url: "/Dashboard/GetIndicators?pillarId=" + pillarId,
                method: 'GET',
                success: function (result) {
                    console.log(result);
                    IndicatorMapDom(result);
                }
            });
        });
    };

    function ChartMapDom(data) {
        var chart = $('#barChart');
        console.log(data);
        var lgus = [];
        var indicatorDatas = [];

        $.each(data, function (key, value) {
            if (typeof value === 'object') {
                lgus.push(value.lgu);
                indicatorDatas.push(value.indicatorData);
            }
        });

        var maxData = Math.max.apply(Math, indicatorDatas);

        window.myLineChart = new Chart(chart, {
            type: 'horizontalBar',
            data: {
                labels: lgus,
                datasets: [{
                    label: "Data",
                    backgroundColor: ["#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                    borderColor: "rgba(2,117,216,1)",
                    data: indicatorDatas,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 10,
                            beginAtZero: true,
                            userCallback: function (value, index, values) {
                                return value.toLocaleString();  
                            }
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: maxData,
                            maxTicksLimit: 10,

                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'label',
                    label: 'mylabel',
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return tooltipItem.xLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        },
                    },
                }, 
            }
        });

    };

    function IndicatorMapDom(data) {
        $('#indicators').empty();
        $('#indicators').append('<option value="" hidden>Select Indicator</option>');
        $.each(data, function (key, value) {
            if (typeof value === 'object') {
                
                var options = `<option value="${value.indicatorName}">${value.indicatorDesc}</option>`
                $('#indicators').append(options);
            }
        });
    };

    function LoadChart() {
        $('#btnChart').on('click', function (e) {
            e.preventDefault();

            var $form = $(this).closest('form');

            if ($('#region').val() === "" && $('#province').val() === "" && $('#pillars').val() === "" && $('#indicators').val() === "" && $('#year').val() === "") {
                $('#region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });
                $('#province').notify("Please select a province!", {
                    className: "error",
                    position: "top right"
                });
                $('#pillars').notify("Please select a pillar!", {
                    className: "error",
                    position: "top right"
                });
                $('#indicators').notify("Please select a indicator!", {
                    className: "error",
                    position: "top right"
                });
                $('#year').notify("Please select a year!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#region').val() === "") {
                $('#region').notify("Please select a region!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#province').val() === "") {
                $('#province').notify("Please select a province!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#pillars').val() === "") {
                $('#pillars').notify("Please select a pillar!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#indicators').val() === "") {
                $('#indicators').notify("Please select a indicator!", {
                    className: "error",
                    position: "top right"
                });
            } else if ($('#year').val() === "") {
                $('#year').notify("Please select a year!", {
                    className: "error",
                    position: "top right"
                });
            } else {
                $.ajax({
                    url: $form.attr('action'),
                    method: 'GET',
                    data: $form.serializeArray(),
                    beforeSend: function () {
                        loading.show();
                    },
                    success: function (result) {
                        if (window.myLineChart instanceof Chart) {
                            window.myLineChart.destroy();
                        }
                        ChartMapDom(result);
                    },
                    error: function (result) {
                        console.log(result);
                    },
                    complete: function () {
                        loading.hide();
                    }
                });
            }

        });
    };

    function LoadProvinces() {
        $('#region').on('change', function (e) {
            e.preventDefault();

            var regionId = $(this).val();

            $.ajax({
                url: "/Province/GetProvincesByRegion?regionId=" + regionId,
                method: 'GET',
                success: function (result) {
                    $('#province').empty();
                    $('#province').append('<option value="" hidden>Select Province</option>');
                    ProvinceMapDom(result);
                }
            });
        });
    };

    function ProvinceMapDom(data) {

        $.each(data, function (key, value) {
            if (typeof value === 'object') {
                var options = `<option value="${value.provinceId}">${value.provinceName}</option>`
                $('#province').append(options);
            }
        });
    };

    // Public Method
    dashboard.init = function () {
        LoadIndicators();
        LoadChart();
        LoadProvinces();
    };


}(window.dashboard = window.dashboard || {}, jQuery));