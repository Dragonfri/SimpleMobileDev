// * File Name: Assignment2
// *
// * Revision History:
// *       Young Geun, Kim, 2019-02-27 : Created
// *       Young Geun, Kim, 2019-03-03 : Updated

function do_AddValidate() {
    doValidate_YKAddForm();
}

function do_EditValidate() {
    doValidate_YKEditForm();
}

function do_storage() {
    localStorage.setItem("DefaultEmail",$("#YKSettingEmail").val());
    alert("Default reviewer email saved");
}

$(document).ready(function(){
    $("#YKAddFolder").hide();
    $("#YKEditFolder").hide();
    $("#YKAddCheck").click(function(){
        if ($("#YKAddCheck").prop("checked")){
            $("#YKAddFolder").show();
        }
        else{
            $("#YKAddFolder").hide();
        }
    });
    $("#YKEditCheck").click(function(){
        if ($("#YKEditCheck").prop("checked")){
            $("#YKEditFolder").show();
        }
        else{
            $("#YKEditFolder").hide();
        }
    });
    $("#YKAddFoodRate").change(AddOverAll);
    $("#YKAddServiceRate").change(AddOverAll);
    $("#YKAddValueRate").change(AddOverAll);
    $("#YKEditFoodRate").change(EditOverAll);
    $("#YKEditServiceRate").change(EditOverAll);
    $("#YKEditValueRate").change(EditOverAll);
    $("#YKSave").on("click", do_AddValidate());
    $("#YKUpdate").on("click", do_EditValidate);
    $("#YKSettingSave").on("click",do_storage);
});
function AddOverAll(){
    var foodval = document.getElementById("YKAddFoodRate").value;
    var serviceval = document.getElementById("YKAddServiceRate").value;
    var valueval = document.getElementById("YKAddValueRate").value;

    var cal;

    if(foodval==""||foodval>5||foodval<0){foodval="0";}
    if(serviceval==""||serviceval>5||serviceval<0){serviceval="0";}
    if(valueval==""||valueval>5||valueval<0){valueval="0";}

    cal = (parseInt(foodval) + parseInt(serviceval) +parseInt(valueval))*100/15;

    document.getElementById('YKAddOverAllRate').value = cal+"%";
}
function EditOverAll(){
    var foodval = document.getElementById("YKEditFoodRate").value;
    var serviceval = document.getElementById("YKEditServiceRate").value;
    var valueval = document.getElementById("YKEditValueRate").value;

    var cal;

    if(foodval==""||foodval>5||foodval<0){foodval="0";}
    if(serviceval==""||serviceval>5||serviceval<0){serviceval="0";}
    if(valueval==""||valueval>5||valueval<0){valueval="0";}

    cal = (parseInt(foodval) + parseInt(serviceval) +parseInt(valueval))*100/15;

    document.getElementById('YKEditOverAllRate').value = cal+"%";
}
