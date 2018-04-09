$("table").on("click", ".delete", function ( event ) {
    // Get index of parent TD among its siblings (add one for nth-child)
    var ndx = $(this).parent().index() + 1;
    // Find all TD elements with the same index
    $("td", event.delegateTarget).remove(":nth-child(" + ndx + ")");
});
