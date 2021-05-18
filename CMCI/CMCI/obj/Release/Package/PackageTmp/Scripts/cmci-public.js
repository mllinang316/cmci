(function (public, $, undefined) {
    //Private Property
    var loading = $("#loading");

    //Private Method
    $.fn.exists = function () {
        return this.length !== 0;
    };

    function LoadIndicators() {
        $('#pillars').on('change', function (e) {
            e.preventDefault();

            var pillarId = $(this).val();

            $.ajax({
                url: "/Home/GetIndicators?pillarId=" + pillarId,
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
            type: 'bar',
            data: {
                labels: lgus,
                datasets: [{
                    label: "Data: ",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: indicatorDatas,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: maxData,
                            maxTicksLimit: 8,
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });

    };

    function IndicatorMapDom(data) {
        $('#indicators').empty();
        $('#indicators').append('<option hidden>Select Indicator</option>');
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
        });
    };

    function LoadProvinces() {
        $('#region').on('change', function (e) {
            e.preventDefault();

            var regionId = $(this).val();

            $.ajax({
                url: "/Home/GetProvincesByRegion?regionId=" + regionId,
                method: 'GET',
                success: function (result) {
                    $('#province').empty();
                    $('#province').append('<option hidden>Select Province</option>');
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
    public.init = function () {
        LoadIndicators();
        LoadChart();
        LoadProvinces();
    };


}(window.public = window.public || {}, jQuery));