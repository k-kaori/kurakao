$('#select_type2, #select_type3, #select_type4, #select_type5').hide();
$('[name="select_type"]:radio').change(function () {
    if ($('#type1').prop('checked')) {
        $('#select_type1').show();
        $('#select_type2, #select_type3, #select_type4, #select_type5').hide();
    } else if ($('#type2').prop('checked')) {
        $('#select_type2').show();
        $('#select_type1, #select_type3, #select_type4, #select_type5').hide();
    } else if ($('#type3').prop('checked')) {
        $('#select_type3').show();
        $('#select_type1, #select_type2, #select_type4, #select_type5').hide();
    } else if ($('#type4').prop('checked')) {
        $('#select_type4').show();
        $('#select_type1, #select_type2, #select_type3, #select_type5').hide();
    } else if ($('#type5').prop('checked')) {
        $('#select_type5').show();
        $('#select_type1, #select_type2, #select_type3, #select_type4').hide();
    }
});
