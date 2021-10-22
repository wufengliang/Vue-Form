import { Button } from 'ant-design-vue';

const config = {
    name: '按钮',
    tag: Button,
    icon: null,
    attrs: [
        { key: 'disabled', value: false },
        { key: 'type', value: 'default' }
    ],
    extend: {
        addAttr(params) {
            config.attrs.push(params);
        }
    }
}

export default config;