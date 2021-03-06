/**
 * 弹出框基础类
 */
export default {
    props: ['params'],
    data: function () {
        return {
            show: true
        }
    },
    ready: function () {
    },
    methods: {
        close: function () {
            window.EM.$emit('dialog.close', this.$options.name)
        }
    }
}
