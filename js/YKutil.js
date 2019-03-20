// * File Name: Assignment2
// *
// * Revision History:
// *       Young Geun, Kim, 2019-02-27 : Created
// *       Young Geun, Kim, 2019-03-03 : Updated

function doValidate_YKAddForm() {
    var form = $("#YKAddForm");
    //var subFormCheck = $("#YKAddCheck").prop("checked");
    form.validate({
        rules: {
            YKAddName: {
                required: true,
                minlength: 2,
                maxlength:20
            },
            YKAddEmail:{
                required: true,
                email:true
            },
            YKAddDate:{
                required: true

            },
            YKAddFoodRate: {
                required: true,
                min: 0,
                max: 5
            },
            YKAddServiceRate:{
                required: true,
                min: 0,
                max: 5
            },
            YKAddValueRate:{
                required: true,
                min: 0,
                max: 5
            }
        },
        messages: {
            YKAddName: {
                required: "Name is required",
                minlength: "Name must be at least 2 characters long",
                maxlength: "Name must be maximum 20 characters long"
            },
            YKAddEmail:{
                required: "Email is required",
                email: "Invalid email format"
            },
            YKAddDate:{
                required: "Review Date is required",
            },
            YKAddFoodRate: {
                required: "Food is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            YKAddServiceRate:{
                required: "Service is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            YKAddValueRate:{
                required: "Value Date is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return form.valid(); //return boolean
}
function doValidate_YKEditForm() {
    var form = $("#YKEditForm");
    form.validate({
        rules: {
            YKEditName: {
                required: true,
                minlength: 2,
                maxlength:20
            },
            YKEditEmail:{
                required: true,
                email:true
            },
            YKEditDate:{
                required: true

            },
            YKEditFoodRate: {
                required: true,
                min: 0,
                max: 5
            },
            YKEditServiceRate:{
                required: true,
                min: 0,
                max: 5
            },
            YKEditValueRate:{
                required: true,
                min: 0,
                max: 5
            }
        },
        messages: {
            YKEditName: {
                required: "Name is required",
                minlength: "Name must be at least 2 characters long",
                maxlength: "Name must be maximum 20 characters long"
            },
            YKEditEmail:{
                required: "Email is required",
                email: "Invalid email format"
            },
            YKEditDate:{
                required: "Review Date is required",
            },
            YKEditFoodRate: {
                required: "Food is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            YKEditServiceRate:{
                required: "Service is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            YKEditValueRate:{
                required: "Value Date is required",
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return form.valid(); //return boolean
}