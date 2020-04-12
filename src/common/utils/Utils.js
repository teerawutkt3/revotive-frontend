export default {
    isNotBlank(value) {
        if (Array.isArray(value))
            return value.length != 0
        return value != undefined && value != '' && value != null
    },
    isBlank(value) {
        return !this.isNotBlank(value)
    },
    formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
}