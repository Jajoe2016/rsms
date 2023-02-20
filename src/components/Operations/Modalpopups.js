const popups = require('popups');



function modal(){
    
    return (
popups.modal({
    title:   'Modal',
    content: '<p> hello world </p>',
    onOpen: function(){},      // gets called when popup is opened
    onSubmit: function(val){}, // gets called when submitted. val as an paramater for prompts
    onClose: function(){}      // gets called when popup is closed
})
    );
}
export default modal;
