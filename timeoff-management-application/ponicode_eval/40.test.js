
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171222-add-carry-over-allowance-column.js
const _20171222_add_carry_over_allowance_column = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171222-add-carry-over-allowance-column.js")

// @ponicode
describe("_20171222_add_carry_over_allowance_column.up", () => {
    test("0", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"{\"x\":5,\"y\":6}\"", "user@ponicode.co.uk"))
    })

    test("1", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"\"2006-01-02T14:04:05.000Z\"\"", "1user@ponicode.com"))
    })

    test("2", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"{\"x\":5,\"y\":6}\"", "user@ponicode"))
    })

    test("3", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"[3,\"false\",false]\"", "user1+user2@ponicode.com"))
    })

    test("4", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("5", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user.ponicode.com"))
    })

    test("6", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("7", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })

    test("8", () => {
        expect(_20171222_add_carry_over_allowance_column.up("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171222-add-carry-over-allowance-column.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171222-add-carry-over-allowance-column.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}