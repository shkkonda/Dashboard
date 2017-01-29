(function() {
  var clearInputs, form, formInputs, inputCode, validCode, validateCode;

  form = $(".code_input");

  formInputs = $(form).children("input");

  validCode = "1234";

  $(formInputs).autotab_magic();

  inputCode = function() {
    var code;
    code = [];
    $(formInputs).each(function() {
      return code.push($(this).val());
    });
    return code.join("");
  };

  validateCode = function() {
    var c;
    c = inputCode();
    if (c === validCode) {
      $(form).removeClass("error").addClass("success");
      $(".hint").fadeOut();
      return false;
    } else if (c.length === 4) {
      return $(".hint").fadeIn();
    } else {
      $(form).addClass("error").removeClass("success");
      return false;
    }
  };

  clearInputs = function() {
    $(formInputs).first().focus();
    $(formInputs).val("");
    return $(form).removeClass();
  };

  $(formInputs).keyup(function() {
    if (event.keyCode === 8 || event.keyCode === 46) {
      clearInputs();
      return false;
    } else {
      return validateCode();
    }
  });

  $(formInputs).click(function() {
    return clearInputs();
  });

}).call(this);