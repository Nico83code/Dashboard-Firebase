/**
 *
 *  @param {array}: The array to sort
 *  @param {boolean}: Sort ascending or descending
 *  @param {string}: Sort by column
 *
 */

const Sort = (array, order, column) => {
    if (order) {
        return array.sort((a, b) => {
            if (a[column] < b[column]) {
                return -1
            } else if (a[column] > b[column]) {
                return 1
            }
            return 0
        })
    }
    return array.sort((a, b) => {
        if (a[column] < b[column]) {
            return 1
        } else if (a[column] > b[column]) {
            return -1
        }
        return 0
    })
}

export default Sort
 