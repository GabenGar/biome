// rome-ignore lint(noDeadCode): this comment does nothing
function SuppressionComments1() {
    beforeReturn();
    return;
    afterReturn();
}

function SuppressionComments2() {
    beforeReturn();
    return;
    // rome-ignore lint(noDeadCode): supress warning
    afterReturn();
}